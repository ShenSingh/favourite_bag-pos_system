////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.add('active');
            navLink.style.background = 'rgba(128, 128, 128, 0.7)';
            navLink.style.color = '#333333';
        });

        item.addEventListener('mouseout', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.remove('active');
            navLink.style.background = '';
        });
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const navbarBrand = document.querySelector('.header span');

    // Set default color
    navbarBrand.style.color = '#333333';

    // Change color on hover
    navbarBrand.addEventListener('mouseover', function () {
        navbarBrand.style.color = 'rgba(128, 128, 128, 0.7)';
    });

    // Revert to default color when not hovering
    navbarBrand.addEventListener('mouseout', function () {
        navbarBrand.style.color = 'black';
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'bold' class from all links
            navLinks.forEach(nav => nav.classList.remove('bold'));

            // Add the 'bold' class to the clicked link
            this.classList.add('bold');
        });
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerSecButton = document.getElementById('customerBtn');
    const mainContent = document.querySelector('.main-content');
    const customerSecSection = document.querySelector('.customer');

    customerSecButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(customerSecSection);
        customerSecSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerAddButton = document.getElementById('customer-add-btn');
    const customerAddModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerAddButton.addEventListener('click', function () {
        try {
            customerAddModal.show();
            console.log("Modal opened successfully");
        } catch (error) {
            console.error("Error opening the modal: ", error);
        }
    });

    // Add event listener for closing the modal
    document.querySelector('.modal .btn-close').addEventListener('click', function () {
        try {
            customerAddModal.hide();
            console.log("Modal closed successfully");
        } catch (error) {
            console.error("Error closing the modal: ", error);
        }
    });
});
;

////////////////////////////////////////////////////// User Section Load //////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const userButton = document.getElementById('userBtn');
    const mainContent = document.querySelector('.main-content');
    const userSection = document.querySelector('.user');

    userButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(userSection);
        userSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// User Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const UserAddButton = document.getElementById('user-add-btn');
    const UserAddModal = new bootstrap.Modal(document.querySelector('.user-form .modal'));

    UserAddButton.addEventListener('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    const userTableModal = new bootstrap.Modal(document.querySelector('.user-form-edit .modal'));
    const id = document.getElementById('user-id');
    const name = document.getElementById('user-name');
    const email = document.getElementById('user-email');
    const phone = document.getElementById('user-phone');
    const address = document.getElementById('user-address');
    const salary = document.getElementById('user-salary');

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const user_id = row.querySelector('.row-id').textContent;
            const user_name = row.querySelector('.row-name').textContent;
            const user_email = row.querySelector('.row-email').textContent;
            const user_phone = row.querySelector('.row-phone').textContent;
            const user_address = row.querySelector('.row-address').textContent;
            const user_salary = row.querySelector('.row-salary').textContent;

            id.textContent = user_id;
            name.value = user_name;
            email.value = user_email;
            phone.value = user_phone;
            address.value = user_address;
            salary.value = user_salary;

            userTableModal.show();
        });
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const productButton = document.getElementById('productBtn');
    const mainContent = document.querySelector('.main-content');
    const productSection = document.querySelector('.product');

    productButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(productSection);
        productSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Product Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const productAddButton = document.getElementById('product-add-btn');
    const productAddModal = new bootstrap.Modal(document.querySelector('.product-form-new .modal'));

    productAddButton.addEventListener('click', function () {
        productAddModal.show();
    });
});


////////////////////////////////////////////////////// Image Upload for New Product Form //////////////////////////////////////////////////////////

const uploadBoxNew = document.getElementById('uploadBoxNew');
const fileInputNew = document.getElementById('fileInputNew');
const browseFileButtonNew = document.getElementById('browseFileButtonNew');

browseFileButtonNew.addEventListener('click', () => {
    fileInputNew.click();
});

uploadBoxNew.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadBoxNew.style.borderColor = '#fff';
});

uploadBoxNew.addEventListener('dragleave', () => {
    uploadBoxNew.style.borderColor = '#ffffff';
});

uploadBoxNew.addEventListener('drop', (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileNew(file);
    uploadBoxNew.style.borderColor = '#ffffff';
});

fileInputNew.addEventListener('change', (event) => {
    const file = event.target.files[0];
    handleFileNew(file);
});

function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
            uploadBoxNew.innerHTML = `
                <img src="${event.target.result}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `;

            document.getElementById('deleteButtonNew').addEventListener('click', resetUploadBoxNew);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image file.");
    }
}

function resetUploadBoxNew() {
    uploadBoxNew.innerHTML = `
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `;

    const browseFileButtonNew = document.getElementById('browseFileButtonNew');
    const fileInputNew = document.getElementById('fileInputNew');

    browseFileButtonNew.addEventListener('click', () => fileInputNew.click());
    fileInputNew.addEventListener('change', (event) => handleFileNew(event.target.files[0]));
}

////////////////////////////////////////// Product Edit Form Load //////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.product-table tbody tr');
    const productModalEdit = new bootstrap.Modal(document.querySelector('.product-form-edit .modal'));
    const code = document.getElementById('editProductCode');
    const description = document.getElementById('editProductDesc');
    const unitPrice = document.getElementById('editProductUnitPrice');
    const qtyOnHand = document.getElementById('editProductQtyOnHand');
    const uploadBoxEdit = document.getElementById('uploadBoxEdit');
    const imagePreviewEdit = document.getElementById('imagePreviewEdit');
    const uploadTextEdit = document.getElementById('uploadTextEdit');
    const fileInputEdit = document.getElementById('fileInputEdit');

    function resetUploadBoxEdit() {
        imagePreviewEdit.style.display = 'none';
        imagePreviewEdit.src = '';
        uploadTextEdit.style.display = 'block';
    }

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const item_code = row.querySelector('.row-id').textContent;
            const item_description = row.querySelector('.row-desc').textContent;
            const item_unit_price = row.querySelector('.row-price').textContent;
            const item_qty_on_hand = row.querySelector('.row-qty').textContent;
            const item_image = row.querySelector('.row-image img')?.getAttribute('src');

            code.value = item_code;
            description.value = item_description;
            unitPrice.value = item_unit_price;
            qtyOnHand.value = item_qty_on_hand;

            if (item_image) {
                imagePreviewEdit.src = item_image;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            } else {
                resetUploadBoxEdit();
            }

            productModalEdit.show();
        });
    });

    fileInputEdit.addEventListener('change', function () {
        const file = fileInputEdit.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreviewEdit.src = e.target.result;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    document.getElementById('browseFileButtonEdit').addEventListener('click', function () {
        fileInputEdit.click();
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerBtn');
    const mainContent = document.querySelector('.main-content');
    const registerSection = document.querySelector('.cash-register');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(registerSection);
        registerSection.style.display = 'block';
    });
});


////////////////////////////////////////////////////// Customer Add Form Load for Cash Register //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const custButton = document.getElementById('customer-add-btn-reg');
    const custModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    custButton.addEventListener('click', function () {
        custModal.show();
    });
});

////////////////////////////////////////////////////// Data for arrays //////////////////////////////////////////////////////////

let products = [
    { code: "B001", description: "Hand Bag", unitPrice: 2300.00, qtyOnHand: 20, image: "https://imgs.search.brave.com/Ppk9XdIZEmkw2qfg49LZpOZK6P7_5dyEHum0Xi-q10g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQx/NzIyNjEyL3Bob3Rv/L2hhbmRiYWctc3Rv/Y2stcGhvdG8uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPS1s/RWVXalVfanQtZmI1/TnVZcU1lRlZtR1hf/cFd0VUl3TGhwUG5N/TlZvdHM9" },
    { code: "B002", description: "Backpack", unitPrice: 1500.00, qtyOnHand: 50, image: "https://imgs.search.brave.com/qwOLYiebYjwqngfHlsV6vGDy6vvQvY_GZ-WKp9XHJ5A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMueW91cnN1cnBy/aXNlLmNvbS9nYWxs/ZXJ5aW1hZ2UvMGIv/MGJjODhlNWI1MDM3/NmY5MDhhNmUyY2Fk/NDdhMDUwMzAvcGVy/c29uYWxpc2VkLWJh/Y2twYWNrLWJsYWNr/LmpwZz93aWR0aD05/MDAmY3JvcD0xOjE" },
    { code: "B003", description: "Shoulder Bag", unitPrice: 1800.00, qtyOnHand: 30, image: "https://imgs.search.brave.com/7KvaWorux4rSHzjArLVyu2naZE-zqLeB_U2hwSq78Zk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rYXRl/c3BhZGUuc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9LYXRlU3BhZGUv/S0gzOTdfMjAwPyRt/b2JpbGVQcm9kdWN0/VGlsZSQ.jpeg" },
    { code: "B004", description: "Messenger Bag", unitPrice: 2000.00, qtyOnHand: 25, image: "https://imgs.search.brave.com/rJrupv7fhzaX8XFyBkGdIOyDOOhrW2Sb6RDGxj5XkDU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzAyL21lc3Nl/bmdlcmJhZ3MtMjA0/OHB4LXRpbWJ1azJm/cm9udC5qcGc_YXV0/bz13ZWJwJnF1YWxp/dHk9NzUmd2lkdGg9/MTAyNA" },
    { code: "B005", description: "Tote Bag", unitPrice: 1200.00, qtyOnHand: 40, image: "https://imgs.search.brave.com/sNWS4jf2xjdYWrsEWOhQENPHu7pR1BmHrl4Orzj3Vos/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmViZWNjYW1pbmtv/ZmYuY29tL2Nkbi9z/aG9wL2ZpbGVzL0hV/MjRIU0NUT1QtU09G/VFRPVEUtREVOSU0t/QV9ncmFuZGUuanBn/P3Y9MTcxMTY1ODMz/Nw" },
    { code: "B006", description: "Gym Bag", unitPrice: 1600.00, qtyOnHand: 20, image: "https://imgs.search.brave.com/qT9uDE_WDp4dwooBp10LvlaMf2EyGzvhqUiHsOG4-Gw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVkb3h4LmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9SZWQtT3h4/LUppbXMtR3ltLUJh/Zy1oZXJvLmpwZz92/PTE2OTU4NDgzNTcm/d2lkdGg9MTUwMA" },
    { code: "B007", description: "Diaper Bag", unitPrice: 2200.00, qtyOnHand: 15, image: "https://imgs.search.brave.com/hpQ0AcO_b_aUrgt_IKfjdzDbHY_AacjciXtKobQnYK4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mYXdu/ZGVzaWduLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9GYXduX09y/aWdpbmFsX0Jyb3du/XzIuanBnP3Y9MTYy/NjMyODYxNSZ3aWR0/aD0xMDIw" },
    { code: "B008", description: "Travel Bag", unitPrice: 3000.00, qtyOnHand: 10, image: "https://imgs.search.brave.com/vZUFdUeyz0XN7W5jY7gLaATA185chttqddaNiK5bzRs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzErZy1xc1NPc1Mu/anBn" },
    { code: "B009", description: "Laptop Bag", unitPrice: 2500.00, qtyOnHand: 12, image: "https://imgs.search.brave.com/wZxOIorZaUISowqdnrUPSRHFNzf4GfT1Dw-UA33TD0g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cy5v/YmVyd2VydGguY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzLzIyMDQy/NV9PYmVyd2VydGgw/MTA3LmpwZz92PTE3/MDc4MTIzNzUmd2lk/dGg9MjAwMA" },
    { code: "B010", description: "Beach Bag", unitPrice: 1800.00, qtyOnHand: 20, image: "https://imgs.search.brave.com/wgqiboTfZIMSk9xVeRIVIxyBES09WMEeE5oeuHbbsGg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFKU2Q5THVMa0wu/anBn" }
];



let customers = [
    { id: "C001", name: "Dinesh Perera", email: "dinesh.perera@example.com", phone: "0771234567", address: "123 Galle " },
    { id: "C002", name: "Nimali Fernando", email: "nimali.fern@example.com", phone: "0782345678", address: "456 Kandy " },
    { id: "C003", name: "Chamilka Jayasinghe", email: "chamilka.jayas@example.com", phone: "0753456789", address: "789 Negombo " },
    { id: "C004", name: "Ravi Kumara", email: "ravi.kumara@example.com", phone: "0714567890", address: "112 Mount Lavinia" },
    { id: "C005", name: "Saman Wickramasinghe", email: "saman.wickrama@example.com", phone: "0705678901", address: "223 Matara " },
    { id: "C006", name: "Pavithra Rajapaksha", email: "pavithra.rajap@example.com", phone: "0776789012", address: "334 Jaffna " },
    { id: "C007", name: "Kamal Weerasinghe", email: "kamal.weera@example.com", phone: "0787890123", address: "445 Battaramulla" },
    { id: "C008", name: "Dilani Jayawardena", email: "dilani.jayawa@example.com", phone: "0758901234", address: "556 Anuradhapura" }
];


let users = [
    { id: "U001", name: "Demo Shan", email: "dshan@example.com", phone: "111222333", address: "123 Elm St", salary: 5500 },
    { id: "U002", name: "Kalana Kalum", email: "kalum@example.com", phone: "222333444", address: "456 Oak St", salary: 4700 }
];

//////////////////////////////////////////////////////////////////////// Table data display //////////////////////////////////////////////////////////

// Function to display products in a table
function displayProducts() {
    const productTableBody = document.querySelector('.product-table tbody');
    productTableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        let row = `
            <tr>
                <td class="row-id">${product.code}</td>
                <td class="row-desc">${product.description}</td>
                <td class="row-image" style="width: 10%; height: auto;" ><img src="${product.image}" alt="${product.description}" style="width: 100%;
                aspect-ratio: auto;
                object-fit: cover;"></td>
                <td class="row-price">${product.unitPrice.toFixed(2)}</td>
                <td class="row-qty">${product.qtyOnHand}</td>
                <td class="row-actions"> <button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        productTableBody.innerHTML += row;
    });
}

// Function to display customers in a table
function displayCustomers() {
    const customerTableBody = document.querySelector('.customer-table tbody');
    customerTableBody.innerHTML = ''; // Clear existing rows

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
        customerTableBody.innerHTML += row;
    });
}

/////////////////////////////////////////////////////////////////////// Saving Data///////////////////////////////////////////////

// Function to display users in a table
function displayUsers() {
    const userTableBody = document.querySelector('.user-table tbody');
    userTableBody.innerHTML = ''; // Clear existing rows

    users.forEach(user => {
        let row = `
            <tr>
                <td class="row-id">${user.id}</td>
                <td class="row-name">${user.name}</td>
                <td class="row-email">${user.email}</td>
                <td class="row-phone">${user.phone}</td>
                <td class="row-address">${user.address}</td>
                <td class="row-salary">${user.salary}</td>
                <td class="row-actions"><button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        userTableBody.innerHTML += row;
    });
}

// Call these functions to initially load the tables
displayProducts();
// displayCustomers();
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
document.getElementById('product-add-btn').addEventListener('click', function() {
    let newProduct = {
        code: document.getElementById('productCode').value,
        description: document.getElementById('productDesc').value,
        image: document.getElementById('productImage').value, // Assuming an input for image URL
        unitPrice: parseFloat(document.getElementById('productUnitPrice').value),
        qtyOnHand: parseInt(document.getElementById('productQtyOnHand').value),

    };
    addProduct(newProduct);
    // Hide modal, clear form, etc.
});

////////////////////////////////////////////////////// Product cards load ////////////////////////////////////////////

// Select the product list container
const productList = document.getElementById("product-list");

// Loop through the products array and generate product cards
products.forEach(product => {
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
    productList.innerHTML += productCard;
});

////////////////////////////////////////////////////// Invoice Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const invoiceButton = document.getElementById('invoiceBtn');
    const mainContent = document.querySelector('.main-content');
    const invoiceSection = document.querySelector('.invoice');

    invoiceButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(invoiceSection);
        invoiceSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Dashboard Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const dashboardButton = document.getElementById('dashboardBtn');
    const mainContent = document.querySelector('.main-content');
    const dashboardSection = document.querySelector('.dashboard');

    // Function to load the dashboard section
    function loadDashboard() {
        mainContent.innerHTML = ''; // Clear existing content
        mainContent.appendChild(dashboardSection); // Append dashboard section
        dashboardSection.style.display = 'block'; // Show the dashboard section
    }

    // Load the dashboard when the page is fully loaded
    loadDashboard();

    // Event listener for dashboard button click (if needed)
    dashboardButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button action
        loadDashboard(); // Call the function to load dashboard
    });
});

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Bar Chart 1
        var ctxBar1 = document.getElementById('barChart1').getContext('2d');
        var barChart1 = new Chart(ctxBar1, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Order Summary',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error loading Bar Chart 1:', error);
    }

    try {
        // Bar Chart 2
        var ctxBar2 = document.getElementById('barChart2').getContext('2d');
        var barChart2 = new Chart(ctxBar2, {
            type: 'bar',
            data: {
                labels: ['August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Order Summary',
                    data: [75, 69, 90, 91, 66],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error loading Bar Chart 2:', error);
    }

    try {
        // Pie Chart 1
        var ctxPie1 = document.getElementById('pieChart1').getContext('2d');
        var pieChart1 = new Chart(ctxPie1, {
            type: 'pie',
            data: {
                labels: ['Grocery', 'Fruits', 'Vegetables', 'Others'],
                datasets: [{
                    label: 'Top Categories',
                    data: [43, 31, 15, 11],
                    backgroundColor: [
                        'rgb(255, 179, 186)',  // Pastel Red
                        'rgb(255, 223, 186)',  // Pastel Orange
                        'rgb(255, 255, 186)',  // Pastel Yellow
                        'rgb(186, 255, 201)',  // Pastel Green
                        'rgb(186, 225, 255)'   // Pastel Blue
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    } catch (error) {
        console.error('Error loading Pie Chart 1:', error);
    }

    try {
        // Pie Chart 2
        var ctxPie2 = document.getElementById('pieChart2').getContext('2d');
        var pieChart2 = new Chart(ctxPie2, {
            type: 'pie',
            data: {
                labels: ['Grocery', 'Fruits', 'Vegetables', 'Others'],
                datasets: [{
                    label: 'Top Categories',
                    data: [43, 31, 15, 11],
                    backgroundColor: [
                        'rgb(255, 179, 186)',  // Pastel Red
                        'rgb(255, 223, 186)',  // Pastel Orange
                        'rgb(255, 255, 186)',  // Pastel Yellow
                        'rgb(186, 255, 201)',  // Pastel Green
                        'rgb(186, 225, 255)'   // Pastel Blue
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    } catch (error) {
        console.error('Error loading Pie Chart 2:', error);
    }
});