import { customers } from "../db/Database.js";
import CustomerModel from "../Model/CustomerModel.js";


const customerTableBody = $('.customer-table tbody');
const addCustomerBtn = $('#customer-add-btn');
const customerAddModal = new bootstrap.Modal($('.customer-form-new .modal').get(0));
const customerUpdateModal = new bootstrap.Modal($('.customer-form-edit .modal').get(0));
let selectedIndex;

// Display customer in table
function displayCustomers() {
    customerTableBody.empty();
    customers.forEach((customer, index) => {
        let row = `
            <tr data-index="${index}">
                <td class="row-id">${customer.getId()}</td>
                <td class="row-name">${customer.getName()}</td>
                <td class="row-email">${customer.getEmail()}</td>
                <td class="row-phone">${customer.getPhone()}</td>
                <td class="row-address">${customer.getAddress()}</td>
                <td class="row-actions"> <button class="btn btn-danger update-customer-btn">Update</button> </td>
            </tr>
        `;
        customerTableBody.append(row);
    });
}
// Generate new customer ID
function genNewCustomerId() {
    let maxIdNum = customers.reduce((max, customer) => {
        const idNum = parseInt(customer.getId().substring(1), 10);
        return !isNaN(idNum) && idNum > max ? idNum : max;
    }, 0);
    let newIdNum = (maxIdNum + 1).toString().padStart(3, '0');
    return `C${newIdNum}`;
}
// Clear product form  - no
function clearCustomerForm() {
    $('#add-customer-code, #add-customer-name, #add-customer-email, #add-customer-phone, #add-customer-address').val('');
}

// Define and export the function
export function reattachAddCustomerClick() {
    console.log("click reattach");
    addCustomerBtn.off('click', showCustomerAddModal).on('click', showCustomerAddModal);
}

// Define the showProductAddModal function if it is also used in other parts
function showCustomerAddModal() {
    $('#add-customer-code').val(genNewCustomerId()).prop('disabled', true);
    customerAddModal.show();
}

// Function to reattach the click event for the update buttons
export function reattachUpdateCustomerClick() {
    console.log("click reattach for update");
    customerTableBody.off('click', '.update-customer-btn').on('click', '.update-customer-btn', function () {
        // Retrieve the index of the clicked row
        selectedIndex = $(this).closest('tr').data('index');
        // Call the function to open the update modal
        openUpdateCustomerModal(selectedIndex);
    });
}


function openUpdateCustomerModal(selectedIndex) {
    const customer = customers[selectedIndex];

    $('#edit-customer-code').val(customer.getId()).prop('disabled', true);
    $('#edit-customer-name').val(customer.getName());
    $('#edit-customer-email').val(customer.getEmail());
    $('#edit-customer-phone').val(customer.getPhone());
    $('#edit-customer-address').val(customer.getAddress());

    customerUpdateModal.show();
}

// Event handlers
$(document).ready(function (){
    // save new Customer
    $('#save-customer-btn').on('click', function (){
        const newCustomer = new CustomerModel(
            $('#add-customer-code').val().trim(),
            $('#add-customer-name').val().trim(),
            $('#add-customer-email').val().trim(),
            $('#add-customer-phone').val().trim(),
            $('#add-customer-address').val().trim()
        );
        customers.push(newCustomer);
        displayCustomers();
        clearCustomerForm();
        customerAddModal.hide();
    })

    // Save updated customer
    $('#cust-update-save-btn').on('click', function () {
        const customer = customers[selectedIndex];
        customer.setId($('#edit-customer-code').val());
        customer.setName($('#edit-customer-name').val());
        customer.setEmail($('#edit-customer-email').val());
        customer.setPhone($('#edit-customer-phone').val());
        customer.setAddress($('#edit-customer-address').val());

        displayCustomers()
        customerUpdateModal.hide();
    });

    // Delete customer
    $('#cust-delete-btn').on('click', function () {
        customers.splice(selectedIndex, 1);
        displayCustomers()
        customerUpdateModal.hide();
    });

    displayCustomers()
})


