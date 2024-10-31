import { products } from "../db/Database.js";
import ProductModel from "../Model/ProductModel.js";

const productTableBody = $('.product-table tbody');
const addProductBtn = $('#product-add-btn');
const productAddModal = new bootstrap.Modal($('.product-form-new .modal').get(0));
const productUpdateModal = new bootstrap.Modal($('.product-form-edit .modal').get(0));
let productImageDataURL = "";
let selectedIndex;

// Display products in table
function displayProducts() {
    productTableBody.empty();
    products.forEach((product, index) => {
        let row = `
            <tr data-index="${index}">
                <td class="row-id">${product.getCode()}</td>
                <td class="row-desc">${product.getDescription()}</td>
                <td class="row-category">${product.getCategory()}</td>
                <td class="row-image" style="width: 10%; height: auto;"><img src="${product.getImage()}" alt="${product.getDescription()}" style="width: 100%; aspect-ratio: auto; object-fit: cover;"></td>
                <td class="row-price">${parseFloat(product.getUnitPrice()).toFixed(2)}</td>
                <td class="row-qty">${product.getQtyOnHand()}</td>
                <td class="row-actions"><button class="btn btn-danger update-product-btn">Update</button></td>
            </tr>
        `;
        productTableBody.append(row);
    });
}

// Generate new product ID
function genNewProductId() {
    let maxIdNum = products.reduce((max, product) => {
        const idNum = parseInt(product.getCode().substring(1), 10);
        return !isNaN(idNum) && idNum > max ? idNum : max;
    }, 0);
    let newIdNum = (maxIdNum + 1).toString().padStart(3, '0');
    return `B${newIdNum}`;
}

// Clear product form
function clearProductForm() {
    $('#add-product-code, #add-product-des, #add-product-cat, #add-product-unitPrice, #add-product-qntity').val('');
    resetUploadBoxNew();
}

// Reset upload box for new product
function resetUploadBoxNew() {
    const uploadBoxNew = $('#uploadBoxNew');
    uploadBoxNew.html(`
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `);
    $('#browseFileButtonNew').on('click', () => $('#fileInputNew').click());
    $('#fileInputNew').on('change', (event) => handleFileNew(event.target.files[0]));
    productImageDataURL = "";
}

// Handle file selection
function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (event) {
            productImageDataURL = event.target.result;
            $('#uploadBoxNew').html(`
                <img src="${productImageDataURL}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `);
            $('#deleteButtonNew').on('click', resetUploadBoxNew);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please upload a valid image file.");
    }
}

// Define and export the function
export function reattachAddProductClick() {
    console.log("click reattach");
    addProductBtn.off('click', showProductAddModal).on('click', showProductAddModal);
}

// Define the showProductAddModal function if it is also used in other parts
function showProductAddModal() {
    $('#add-product-code').val(genNewProductId()).prop('disabled', true);
    productAddModal.show();
}

function openUpdateProductModal(selectedIndex) {
    const product = products[selectedIndex];

    $('#edit-product-code').val(product.getCode()).prop('disabled', true);
    $('#edit-product-desc').val(product.getDescription());
    $('#edit-product-category').val(product.getCategory());
    $('#edit-product-unitPrice').val(product.getUnitPrice());
    $('#edit-product-qtyOnHand').val(product.getQtyOnHand());

    const imageSrc = product.getImage();
    if (imageSrc) {
        $('#imagePreviewEdit').attr('src', imageSrc).show();
        $('#uploadTextEdit').hide();
    } else {
        resetUploadBoxNew();
    }

    productUpdateModal.show();
}

// Function to reattach the click event for the update buttons
export function reattachUpdateProductClick() {
    console.log("click reattach for update");
    productTableBody.off('click', '.update-product-btn').on('click', '.update-product-btn', function () {
        // Retrieve the index of the clicked row
        selectedIndex = $(this).closest('tr').data('index');
        // Call the function to open the update modal
        openUpdateProductModal(selectedIndex);
    });
}


// Event handlers
$(document).ready(function () {

    // Save new product
    $('#save-product-btn').on('click', function () {
        const newProduct = new ProductModel(
            $('#add-product-code').val().trim(),
            $('#add-product-des').val().trim(),
            $('#add-product-cat').val().trim(),
            parseFloat($('#add-product-unitPrice').val().trim()),
            parseInt($('#add-product-qntity').val().trim(), 10),
            productImageDataURL
        );
        products.push(newProduct);
        displayProducts();
        clearProductForm();
        productAddModal.hide();
    });

    // Save updated product
    $('#update-save-btn').on('click', function () {
        const product = products[selectedIndex];
        product.setCode($('#edit-product-code').val());
        product.setDescription($('#edit-product-desc').val());
        product.setCategory($('#edit-product-category').val());
        product.setUnitPrice(parseFloat($('#edit-product-unitPrice').val()));
        product.setQtyOnHand(parseInt($('#edit-product-qtyOnHand').val(), 10));

        displayProducts();
        productUpdateModal.hide();
    });

    // Delete product
    $('#delete-product-btn').on('click', function () {
        products.splice(selectedIndex, 1);
        displayProducts();
        productUpdateModal.hide();
    });

    // Load and display products on page load
    displayProducts();
});
