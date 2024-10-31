import {users} from "../db/Database.js";

//check username and password
function checkUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

//enter into the dashboard if the username and password are correct
function login() {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    const user = checkUser(username, password);
    if (true) {

        // Make header, aside, and main content visible
        $('#header').show();
        $('#aside').show();
        $('#main-content').show();

        //load the dashboard
        loadDashboard();

        // Optionally, hide the login page
        $('.login-page').hide();
    } else {
        alert('Invalid username or password');
    }
}

//load the dashboard
function loadDashboard() {
    const mainContent = $('#main-content');
    const dashboardSection = $('.dashboard');

    // Clear existing content
    mainContent.empty();
    mainContent.append(dashboardSection);
    dashboardSection.show();
}

$(document).ready(function() {
    let signInBtn = $('#signInBtn');
    signInBtn.on('click', login);
});