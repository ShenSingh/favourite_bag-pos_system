////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.nav-item').on('mouseover', function() {
        const navLink = $(this).find('.nav-link');
        navLink.addClass('active');
        navLink.css({
            'background': 'rgba(128, 128, 128, 0.7)',
            'color': '#333333'
        });
    });

    $('.nav-item').on('mouseout', function() {
        const navLink = $(this).find('.nav-link');
        navLink.removeClass('active');
        navLink.css('background', '');
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    const navbarBrand = $('.header span');

    // Set default color
    navbarBrand.css('color', '#333333');

    // Change color on hover
    navbarBrand.on('mouseover', function () {
        navbarBrand.css('color', 'rgba(128, 128, 128, 0.7)');
    });

    // Revert to default color when not hovering
    navbarBrand.on('mouseout', function () {
        navbarBrand.css('color', 'black');
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
$(document).ready(function() {
    const nav_Links = $('.nav-link');

    nav_Links.on('click', function() {
        // Remove the 'bold' class from all links
        nav_Links.removeClass('bold');

        // Add the 'bold' class to the clicked link
        $(this).addClass('bold');
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////

$(document).ready(function () {
    const mainContent = $('.main-content');
    const customerButton = $('#customerBtn');
    const customerSection = $('.customer');
    // load customer
    customerButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(customerSection);
        customerSection.show();
    });
    
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const customerAddButton = $('#customer-add-btn');
    const customerAddModal = new bootstrap.Modal($('.customer-form .modal').get(0));

    customerAddButton.on('click', function () {
            customerAddModal.show();
    });
    // Add event listener for closing the modal
    $('.modal .btn-close').on('click', function () {
            customerAddModal.hide();
    });
});

$(document).ready(function () {
    const UserAddButton = $('#user-add-btn');
    const UserAddModal = new bootstrap.Modal($('.user-form .modal').get(0));

    UserAddButton.on('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit Customer Form //////////////////////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.customer-table tbody tr');
    const customerTableModal = new bootstrap.Modal($('.customer-form-edit .modal').get(0));

    const id = $('#customer-id');
    const name = $('#customer-name');
    const email = $('#customer-email');
    const phone = $('#customer-phone');
    const address = $('#customer-address');

    // tableRows.on('click', function () {
    //     const customer_id = $(this).find('.row-id').text();
    //     const customer_name = $(this).find('.row-name').text();
    //     const customer_email = $(this).find('.row-email').text();
    //     const customer_phone = $(this).find('.row-phone').text();
    //     const customer_address = $(this).find('.row-address').text();

    //     id.text(customer_id);
    //     name.val(customer_name);
    //     email.val(customer_email);
    //     phone.val(customer_phone);
    //     address.val(customer_address);

    //     // customerTableModal.show();
    // });
});

////////////////////////////////////////////////////// User Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const userButton = $('#userBtn');
    const mainContent = $('.main-content');
    const userSection = $('.user');

    userButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(userSection);
        userSection.show();
    });
});

////////////////////////////////////////////////////// User Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const UserAddButton = $('#user-add-btn');
    const UserAddModal = new bootstrap.Modal($('.user-form .modal').get(0));

    UserAddButton.on('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.user-table tbody tr');
    const userTableModal = new bootstrap.Modal($('.user-form-edit .modal').get(0));

    const id = $('#user-id');
    const name = $('#user-name');
    const email = $('#user-email');
    const phone = $('#user-phone');
    const address = $('#user-address');
    const salary = $('#user-salary');

    tableRows.on('click', function () {
        const user_id = $(this).find('.row-id').text();
        const user_name = $(this).find('.row-name').text();
        const user_email = $(this).find('.row-email').text();
        const user_phone = $(this).find('.row-phone').text();
        const user_address = $(this).find('.row-address').text();
        const user_salary = $(this).find('.row-salary').text();

        id.text(user_id);
        name.val(user_name);
        email.val(user_email);
        phone.val(user_phone);
        address.val(user_address);
        salary.val(user_salary);

        userTableModal.show();
    });

});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const productButton = $('#productBtn');
    const mainContent = $('.main-content');
    const productSection = $('.product');

    productButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(productSection);
        productSection.show();
    });
});

////////////////////////////////////////////////////// Product Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const productAddButton = $('#product-add-btn');
    const productAddModal = new bootstrap.Modal($('.product-form-new .modal').get(0));

    productAddButton.on('click', function () {
        productAddModal.show();
    });
});

//////////////////////////////////////////////////////// Invoice Section Load/////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    const invoiceButton = $('#invoiceBtn');
    const mainContent = $('.main-content');
    const invoiceSection = $('.invoice');

    invoiceButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(invoiceSection);
        invoiceSection.show();
    });
});

////////////////////////////////////////////////////// Image Upload for New Product Form //////////////////////////////////////////////////////////

const uploadBoxNew = $('#uploadBoxNew');
const fileInputNew = $('#fileInputNew');
const browseFileButtonNew = $('#browseFileButtonNew');

browseFileButtonNew.on('click', () => {
    fileInputNew.click();
});

uploadBoxNew.on('dragover', (event) => {
    event.preventDefault();
    uploadBoxNew.css('borderColor', '#fff');
});

uploadBoxNew.on('dragleave', () => {
    uploadBoxNew.css('borderColor', '#ffffff');
});

uploadBoxNew.on('drop', (event) => {
    event.preventDefault();
    const file = event.originalEvent.dataTransfer.files[0];
    handleFileNew(file);
    uploadBoxNew.css('borderColor', '#ffffff');
});

fileInputNew.on('change', (event) => {
    const file = event.target.files[0];
    handleFileNew(file);
});

function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
            uploadBoxNew.html(`
                <img src="${event.target.result}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `);

            $('#deleteButtonNew').on('click', resetUploadBoxNew);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image file.");
    }
}

function resetUploadBoxNew() {
    uploadBoxNew.html(`
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `);

    const browseFileButtonNew = $('#browseFileButtonNew');
    const fileInputNew = $('#fileInputNew');

    browseFileButtonNew.on('click', () => fileInputNew.click());
    fileInputNew.on('change', (event) => handleFileNew(event.target.files[0]));
}

////////////////////////////////////////// Product Edit Form Load //////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.product-table tbody tr');
    const productModalEdit = new bootstrap.Modal($('.product-form-edit .modal').get(0));
    const code = $('#editProductCode');
    const description = $('#editProductDesc');
    const category = $('#editProductCategory');
    const unitPrice = $('#editProductUnitPrice');
    const qtyOnHand = $('#editProductQtyOnHand');
    const uploadBoxEdit = $('#uploadBoxEdit');
    const imagePreviewEdit = $('#imagePreviewEdit');
    const uploadTextEdit = $('#uploadTextEdit');
    const fileInputEdit = $('#fileInputEdit');

    function resetUploadBoxEdit() {
        imagePreviewEdit.hide().attr('src', '');
        uploadTextEdit.show();
    }

    tableRows.on('click', function () {
        const item_code = $(this).find('.row-id').text();
        const item_description = $(this).find('.row-desc').text();
        const item_category = $(this).find('.row-category').text();
        const item_unit_price = $(this).find('.row-price').text();
        const item_qty_on_hand = $(this).find('.row-qty').text();
        const item_image = $(this).find('.row-image img').attr('src');

        code.val(item_code);
        description.val(item_description);
        category.val(item_category);
        unitPrice.val(item_unit_price);
        qtyOnHand.val(item_qty_on_hand);

        if (item_image) {
            imagePreviewEdit.attr('src', item_image).show();
            uploadTextEdit.hide();
        } else {
            resetUploadBoxEdit();
        }

        productModalEdit.show();
    });

    fileInputEdit.on('change', function () {
        const file = fileInputEdit.get(0).files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreviewEdit.attr('src', e.target.result).show();
                uploadTextEdit.hide();
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    $('#browseFileButtonEdit').on('click', function () {
        fileInputEdit.click();
    });
});

////////////////////////////////////////////////////// Cash Register Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const registerButton = $('#cash-registerBtn');
    const mainContent = $('.main-content');
    const registerSection = $('.cash-register');

    registerButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(registerSection);
        registerSection.show();
    });
});

////////////////////////////////////////////////////// Customer Add Form Load for Cash Register //////////////////////////////////////////////////////////
$(document).ready(function () {
    try {
        const custButton = $('#customer-add-btn-reg');
        const custModal = new bootstrap.Modal($('.customer-form .modal').get(0));

        custButton.on('click', function () {
            custModal.show();
        });
    } catch (error) {
        console.error('Error loading customer form:', error);
    }
});

////////////////////////////////////////////////////// Data for arrays //////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////// Table data display //////////////////////////////////////////////////////////

// Function to display products in a table
function displayProducts() {
    const productTableBody = $('.product-table tbody');
    productTableBody.empty(); // Clear existing rows

    products.forEach(product => {
        let row = `
            <tr>
                <td class="row-id">${product.code}</td>
                <td class="row-desc">${product.description}</td>
                <td class="row-category">${product.category}</td>
                <td class="row-image" style="width: 10%; height: auto;" ><img src="${product.image}" alt="${product.description}" style="width: 100%;
    aspect-ratio: auto;
    object-fit: cover;"></td>
                <td class="row-price">${product.unitPrice.toFixed(2)}</td>
                <td class="row-qty">${product.qtyOnHand}</td>
                <td class="row-actions"> <button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        productTableBody.append(row);
    });
}

// Function to display customers in a table
function displayCustomers() {
    const customerTableBody = $('.customer-table tbody');
    customerTableBody.empty(); // Clear existing rows

    customers.forEach(customer => {
        let row = `
            <tr>
                <td class="row-id">${customer.id}</td>
                <td class="row-name">${customer.name}</td>
                <td class="row-email">${customer.email}</td>
                <td class="row-phone">${customer.phone}</td>
                <td class="row-address">${customer.address}</td>
                <td class="row-actions"> <button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        customerTableBody.append(row);
    });
}

/////////////////////////////////////////////////////////////////////// Saving Data///////////////////////////////////////////////

// Function to display users in a table
function displayUsers() {
    const userTableBody = $('.user-table tbody');
    userTableBody.empty();

    users.forEach(user => {
        let row = `
            <tr>
                <td class="row-id">${user.id}</td>
                <td class="row-name">${user.name}</td>
                <td class="row-email">${user.email}</td>
                <td class="row-phone">${user.phone}</td>
                <td class="row-address">${user.address}</td>
                <td class="row-salary">${user.salary}</td>
                <td class="row-actions"><button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        userTableBody.append(row);
    });
}

// Call these functions to initially load the tables
displayProducts();
displayCustomers();
displayUsers();


// Function to add a new product
function addProduct(product) {
    products.push(product);
    displayProducts(); // Refresh the product table
}

// Function to add a new customer
function addCustomer(customer) {
    customers.push(customer);
    displayCustomers(); // Refresh the customer table
}

// Function to add a new user
function addUser(user) {
    users.push(user);
    displayUsers(); // Refresh the user table
}

// Example: Adding a new product from a form
$('#product-add-btn').on('click', function() {
    let newProduct = {
        code: $('#productCode').val(),
        description: $('#productDesc').val(),
        category: $('#productCategory').val(),
        image: $('#productImage').val(), // Assuming an input for image URL
        unitPrice: parseFloat($('#productPrice').val()),
        qtyOnHand: parseInt($('#productQty').val())
    };
    addProduct(newProduct);
});

// Example: Adding a new customer from a form
$('#customer-add-btn').on('click', function() {
    let newCustomer = {
        id: $('#customerId').val(),
        name: $('#customerName').val(),
        email: $('#customerEmail').val(),
        phone: $('#customerPhone').val(),
        address: $('#customerAddress').val()
    };
    addCustomer(newCustomer);
});

// Example: Adding a new user from a form
$('#user-add-btn').on('click', function() {
    let newUser = {
        id: $('#userId').val(),
        name: $('#userName').val(),
        email: $('#userEmail').val(),
        phone: $('#userPhone').val(),
        address: $('#userAddress').val(),
        salary: parseFloat($('#userSalary').val())
    };
    addUser(newUser);
});



////////////////////////////////////////////////////// Dashboard Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const dashboardButton = $('#dashboardBtn');
    const mainContent = $('.main-content');
    const dashboardSection = $('.dashboard');

    // Function to load the dashboard section
    function loadDashboard() {
        mainContent.empty(); // Clear existing content
        mainContent.append(dashboardSection); // Append dashboard section
        dashboardSection.show(); // Show the dashboard section
    }

    // Load the dashboard when the page is fully loaded
    loadDashboard();

    // Event listener for dashboard button click (if needed)
    dashboardButton.on('click', function (event) {
        event.preventDefault(); // Prevent default button action
        loadDashboard(); // Call the function to load dashboard
    });
});

////////////////////////////////////////////////////////////////// Charts ////////////////////////////////////////////////////////////

// Static Data Example for the Bar Chart
const orderData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],  // Labels for each bar (x-axis)
    datasets: [{
        label: 'Orders Per Month', // Label for the dataset
        data: [120, 190, 300, 500, 200, 300], // Data values for each month (y-axis)
        backgroundColor: [ 
            '#ff6e40', '#ff8e53', '#ff7043', '#ff9e80', '#ff6d00', '#ff3d00' // Colors for the bars
        ],
        borderColor: [
            '#ff3d00', '#ff5722', '#ff7043', '#ff8a65', '#ffab91', '#ffe0b2' // Border colors for the bars
        ],
        borderWidth: 1 // Width of the bar borders
    }]
};

// Configuration options for the chart
const barChartOptions = {
    type: 'bar',  // Set the chart type to 'bar'
    data: orderData,
    options: {
        scales: {
            y: {
                beginAtZero: true // Ensures the y-axis starts from 0
            }
        }
    }
};

// Get the context of the canvas where you want to render the chart
const ctx = document.getElementById('barChart').getContext('2d');

// Create the Bar Chart using the Chart.js library
const barChart = new Chart(ctx, barChartOptions);

// Pie Chart
var ctxPie = $('#pieChart').get(0).getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Hand Bag', 'School Bag', 'SuitCase', 'Others'],
        datasets: [{
            label: 'Top Categories',
            data: [43, 31, 15, 11],
            backgroundColor: [
                'rgb(200, 120, 255)',
                'rgb(0, 191, 165)',
                'rgb(255, 159, 64)',
                'rgb(60, 180, 75)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});


///////////////////////////////////////////////////////////////////////////////////////http ////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function() {
//     try {
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.nav-link');
//
//         function showSection(targetId) {
//             sections.forEach(section => {
//                 section.style.display = section.classList.contains(targetId) ? 'block' : 'none';
//             });
//         }
//
//         navLinks.forEach(link => {
//             link.addEventListener('click', function(event) {
//                 try {
//                     event.preventDefault();
//                     const targetId = this.id.replace('Btn', '');
//                     showSection(targetId);
//                     // Update the URL without reloading the page
//                     history.pushState(null, '', `#${targetId}`);
//                 } catch (error) {
//                     console.error('Error handling click event:', error);
//                 }
//             });
//         });
//
//         // Show the section based on the URL hash when the page loads
//         const initialSectionId = window.location.hash.replace('#', '');
//         if (initialSectionId) {
//             showSection(initialSectionId);
//         } else {
//             // Default to showing the dashboard section if no hash is present
//             showSection('dashboard');
//         }
//     } catch (error) {
//         console.error('Error during DOMContentLoaded:', error);
//     }
// });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    const signInBtn = $('#signInBtn');
    const signOutBtn = $('#signOutBtn');

    signInBtn.on('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Make header, aside, and main content visible
        $('#header').show();
        $('#aside').show();
        $('#main-content').show();

        // Optionally, hide the login page
        $('.login-page').hide();
    });

    signOutBtn.on('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        $('#header').hide();
        $('#aside').hide();
        $('#main-content').hide();

        // Show the login page
        $('.login-page').css('display', 'flex');
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).on('resize', function() {
    const logElement = $('#log');
    if ($(window).width() >= 768 && $(window).width() < 992) {
        logElement.removeClass('col-md-4 col-md-2 col-md-1').addClass('col-md-3');
    } else if ($(window).width() >= 576 && $(window).width() < 768) {
        logElement.removeClass('col-md-4 col-md-3 col-md-1').addClass('col-md-2');
    } else if ($(window).width() < 576) {
        logElement.removeClass('col-md-4 col-md-3 col-md-2').addClass('col-md-1');
    } else {
        logElement.removeClass('col-md-3 col-md-2 col-md-1').addClass('col-md-4');
    }
});

// Initial check to set the correct class on page load
$(window).trigger('resize');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    const signInBtn = $('#signInBtn');
    const signOutBtn = $('#signOutBtn');

    signInBtn.on('click', function(event) {
        console.log("sign in btn click")
        event.preventDefault(); // Prevent form submission

        try{
            // Make header, aside, and main content visible
            $('#header').show();
            $('#aside').show();
            $('#main-content').show();

            // Optionally, hide the login page
            $('.login-page').hide();
        }catch (e) {
            console.log(e);
        }

    });

    signOutBtn.on('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        $('#header').hide();
        $('#aside').hide();
        $('#main-content').hide();

        // Show the login page
        $('.login-page').css('display', 'flex');
    });

    // Add a toggle button in the header
    const header = $('.header nav .container-fluid');
    const toggleButton = $('<button>').addClass('btn btn-primary').html('<i class="fa-solid fa-bars"></i>').hide(); // Initially hidden
    header.append(toggleButton);

    // Add event listener for the toggle button
    toggleButton.on('click', function() {
        const aside = $('.aside');
        if (aside.is(':visible')) {
            aside.hide();
        } else {
            aside.show();
        }
    });

    // Add event listener for window resize
    $(window).on('resize', function() {
        const aside = $('.aside');
        if ($(window).width() <= 768) {
            aside.hide();
            toggleButton.show();
        } else {
            aside.show();
            toggleButton.hide();
        }
    });

    // Initial check to set the correct display on page load
    $(window).trigger('resize');
});

$(document).ready(function() {
    const aside = $('.aside');
    if (aside.length) {
        aside.hide();
    }
});

function adjustChartLayout() {
    const chartsSection = $('#charts-section');
    if ($(window).width() <= 768) {
        chartsSection.addClass('vertical-align');
    } else {
        chartsSection.removeClass('vertical-align');
    }
}

// Adjust layout on page load
adjustChartLayout();

// Adjust layout on window resize
$(window).on('resize', adjustChartLayout);

//////////////////////////////////////////////////////// Product cards load ////////////////////////////////////////////

// Select the product list container
const productList = $("#product-list");
$.each(products, function(index, product) {
    const productCard = `
        <div class="col">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.description}">
                <div class="card-body">
                    <h5 class="card-title">${product.description}</h5>
                    <p class="card-text">$${product.unitPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `;

    // Append the product card to the product list
    productList.append(productCard);
});

// $(document).ready(function() {
// const tableRows = $('.customer-table tbody tr');

//     tableRows.click(function() {
//         const rowData = $(this).children('td').map(function() {
//             return $(this).text();
//         }).get();
        
//         console.log('Row details:', rowData);
//     });
// });


$('.customer-table tbody').on('click', 'tr', function() {
    let index = $(this).index();
    console.log('Row index:', index);



    const customerTableModal = new bootstrap.Modal($('.customer-form-edit .modal').get(0));

    const id = $('#customer-id');
    const name = $('#customer-name');
    const email = $('#customer-email');
    const phone = $('#customer-phone');
    const address = $('#customer-address');

    id.text(customers[index].id);
    name.val(customers[index].name);
    email.val(customers[index].email);
    phone.val(customers[index].phone);
    address.val(customers[index].address);



    customerTableModal.show();

    // update customer

    $('#cust-update').on('click', function () {
        const userIndex = index;

        if(name.text() == ""){
            showAlert("Error!", "Please fill all the fields", "error");
        }else{
            customers[userIndex] = {
                id: id.text(),
                name: name.val(),
                email: email.val(),
                phone: phone.val(),
                address: address.val()
            };
            displayCustomers();
            customerTableModal.hide();
            showAlert("Good job!", "Customer updated successfully", "success");
        }

    });

    // delete customer

    $('#cust-delete').on('click', function () {
        customers.splice(index, 1);
        displayCustomers();
        customerTableModal.hide();
        showAlert("Good job!", "Customer deleted successfully", "success");
    });


    const addCustomerTableModal = new bootstrap.Modal($('.customer-form .modal').get(0));

    $('#save-customer-btn').on('click', function(){

        console.log("click save btn")
        // Create the customer object from form field values
        const customer = {
            id: $('#exampleInputEmail2').text().trim(),  // Assumes Customer Id is displayed in a label or span
            name: $('.form-control[type="text"]').val().trim(),
            address: $('#customer-address2').val().trim(),
            phone: $('#customerPhone').val().trim(),
            email: $('#exampleInputEmail2').val().trim()
        };
        
        // Log the customer object to verify
        console.log(customer);
    
        customers.push(customer); // Add the new customer to the array
        displayCustomers(); // Refresh the customer table
        addCustomerTableModal.hide(); // Hide the modal
    });

    function showAlert(title, txt , icon){
        Swal.fire({
            title: title,
            text: txt,
            icon: icon
          });
    }
    

});
