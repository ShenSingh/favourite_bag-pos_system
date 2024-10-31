import { users } from "../db/Database.js";
import UserModel from "../Model/UserModel.js";


const userTableBody = $('.user-table tbody');
const addUserBtn = $('#user-add-btn');
const userAddModal = new bootstrap.Modal($('.user-form-new .modal').get(0));
const userUpdateModal = new bootstrap.Modal($('.user-form-edit .modal').get(0));
let selectedIndex;

// Display customer in table
function displayUsers() {
    userTableBody.empty();
    users.forEach((user, index) => {
        let row = `
            <tr data-index="${index}">
                <td class="row-id">${user.getId()}</td>
                <td class="row-name">${user.getUsername()}</td>
                <td class="row-email">${user.getEmail()}</td>
                <td class="row-password">${user.getPassword()}</td>
                <td class="row-actions"><button class="btn btn-danger update-user-btn">Update</button> </td>
            </tr>
        `;
        userTableBody.append(row);
    });
}

// Generate new customer ID
function genNewUserId() {
    let maxIdNum = users.reduce((max, user) => {
        const idNum = parseInt(user.getId().substring(1), 10);
        return !isNaN(idNum) && idNum > max ? idNum : max;
    }, 0);
    let newIdNum = (maxIdNum + 1).toString().padStart(3, '0');
    return `U${newIdNum}`;
}
// Clear product form  - no
function clearUserForm() {
    $('#add-user-code, #add-user-name, #add-user-email, #add-user-password').val('');
}

// Define and export the function
export function reattachAddUserClick() {
    console.log("click reattach");
    addUserBtn.off('click', showUserAddModal).on('click', showUserAddModal);
}

// Define the showProductAddModal function if it is also used in other parts
function showUserAddModal() {
    $('#add-user-code').val(genNewUserId()).prop('disabled', true);
    userAddModal.show();
}

// Function to reattach the click event for the update buttons
export function reattachUpdateUserClick() {
    console.log("click reattach for update");
    userTableBody
        .off('click', '.update-user-btn').on('click', '.update-user-btn', function () {
        // Retrieve the index of the clicked row
        selectedIndex = $(this).closest('tr').data('index');
        // Call the function to open the update modal
        openUpdateUserModal(selectedIndex);
    });
}


function openUpdateUserModal(selectedIndex) {
    const user = users[selectedIndex];

    $('#edit-user-code').val(user.getId()).prop('disabled', true);
    $('#edit-user-name').val(user.getUsername());
    $('#edit-user-email').val(user.getEmail());
    $('#edit-user-password').val(user.getPassword());

    userUpdateModal.show();
}

// Event handlers
$(document).ready(function (){

    $('#save-user-btn').on('click', function (){
        const newUser = new UserModel(
            $('#add-user-code').val().trim(),
            $('#add-user-name').val().trim(),
            $('#add-user-email').val().trim(),
            $('#add-user-password').val().trim()
        );
        users.push(newUser);
        displayUsers();
        clearUserForm()
        userAddModal.hide();
    })

    // Save updated customer
    $('#user-update-save-btn').on('click', function () {
        const user = users[selectedIndex];
        user.setId($('#edit-user-code').val());
        user.setUsername($('#edit-user-name').val());
        user.setEmail($('#edit-user-email').val());
        user.setPassword($('#edit-user-password').val());

        displayUsers()
        userUpdateModal.hide();
    });

    // Delete customer
    $('#user-delete-btn').on('click', function () {
        users.splice(selectedIndex, 1);
        displayUsers()
        userUpdateModal.hide();
    });


    // displayUsers
    displayUsers();
})