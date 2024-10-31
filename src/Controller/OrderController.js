import ProductModel from "../Model/ProductModel.js";
import {customers, products} from "../db/Database.js";

// Display all products when the page loads
const productList = $("#product-list");
let subtotal = 0; // Track subtotal
const serviceTaxRate = 0.06; // Example service tax rate of 6%
let serviceTax = 0; // Track service tax
const customerIds = $('#orderCustomerId');

// Function to generate product cards
function generateProductCards() {
    productList.empty(); // Clear existing product cards
    $.each(products, function(index, product) {
        console.log("Adding product:", product); // Debug: Log each product object
        const productCard = `
            <div class="col">
                <div class="card product-card">
                    <img src="${product.getImage()}" class="card-img-top" alt="${product.getDescription()}">
                    <div class="card-body">
                        <h5 class="card-title">${product.getDescription()}</h5>
                        <p class="card-category">${product.getCategory()}</p>
                        <p class="card-text">$${product.getUnitPrice().toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        productList.append(productCard);
    });

    // Reattach event listeners to product cards
    productList.off("click", ".product-card", handleProductCardClick); // Remove previous listeners
    productList.on("click", ".product-card", handleProductCardClick);
    console.log("Event listeners reattached to product cards"); // Debug: Log reattachment
}

// Function to handle product card click
function handleProductCardClick() {
    console.log("Product card clicked"); // Debug: Check if click event fires
    const productCard = $(this);
    const productTitle = productCard.find(".card-title").text();
    const productPrice = parseFloat(productCard.find(".card-text").text().replace("$", "")); // Convert price to a number

    // Check if the product already exists in the cart
    const existingCartItem = $("#cart").find(`li[data-title="${productTitle}"]`);
    if (existingCartItem.length > 0) {
        console.log("Updating existing item:", productTitle); // Debug: Existing cart item
        // Update quantity and total price for the existing item
        const quantitySpan = existingCartItem.find(".quantity");
        const priceSpan = existingCartItem.find(".total-price");

        let quantity = parseInt(quantitySpan.text().replace("x", ""));
        quantity += 1;

        const newTotalPrice = (productPrice * quantity).toFixed(2);

        quantitySpan.text(`x${quantity}`);
        priceSpan.text(`$${newTotalPrice}`);

        // Update subtotal
        subtotal += productPrice;
    } else {
        console.log("Adding new item:", productTitle); // Debug: New cart item
        // If the product is not in the cart, add it as a new item
        const cartItem = `
            <li class="list-group-item d-flex justify-content-between" data-title="${productTitle}">
                <span>${productTitle} <span class="quantity">x1</span></span>
                <span class="total-price">$${productPrice.toFixed(2)}</span>
            </li>
        `;
        $("#cart").append(cartItem);

        // Update subtotal
        subtotal += productPrice;
    }

    // Calculate service tax and total payment
    serviceTax = subtotal * serviceTaxRate;
    const totalPayment = (subtotal + serviceTax).toFixed(2);

    console.log("Subtotal:", subtotal, "Service Tax:", serviceTax, "Total Payment:", totalPayment); // Debug: Display totals

    // Update subtotal, service tax, and total in the UI
    $("h6:contains('Total:') + p").text(`Subtotal: $${subtotal.toFixed(2)}`);
    $("h6:contains('Total:') + p + p").text(`Service Tax: $${serviceTax.toFixed(2)}`);
    $("h6:contains('Total Payment:')").text(`Total Payment: $${totalPayment}`);
}

// Initial call to generate product cards
$(document).ready(function() {
    generateProductCards();
});

export function resetCart() {
    console.log("Resetting cart"); // Debug: Check if the method is called
    $("#cart").empty(); // Empty the cart
    subtotal = 0; // Reset subtotal
    serviceTax = 0; // Reset service tax

    // Update UI elements to reflect the empty cart
    $("h6:contains('Total:') + p").text(`Subtotal: $0.00`);
    $("h6:contains('Total:') + p + p").text(`Service Tax: $0.00`);
    $("h6:contains('Total Payment:')").text(`Total Payment: $0.00`);

    // Re-generate product cards and reattach event listeners
    setTimeout(generateProductCards, 10); // Ensure generateProductCards is called after reset
}

function filterProducts(category) {
    $(".product-card").each(function() {
        const productCard = $(this).closest(".col");
        const productCategory = productCard.find(".card-category").text();

        // Show or hide based on category match or 'All' selection
        if (category === "All" || productCategory === category) {
            productCard.removeClass("d-none");
        } else {
            productCard.addClass("d-none");
        }
    });
}

// Event listeners for category buttons
$("#all-button").on("click", function() {
    event.preventDefault();
    filterProducts("All");
});
$("#handBag-btn").on("click", function() {
    event.preventDefault();
    filterProducts("handBag");
});
$("#schoolBag-btn").on("click", function() {
    event.preventDefault();
    filterProducts("schoolBag");
});

// set ids
export function setCustomerIds() {
    customerIds.empty();
    customerIds.append('<option selected>select the customer</option>');

    let customerIdsArr = [];
    customers.map((value) => {

        customerIdsArr.push(value.getId());
    });

    customerIdsArr.map((index) => {
        customerIds.append(
            `<option>${index}</option>`
        )
    });
}