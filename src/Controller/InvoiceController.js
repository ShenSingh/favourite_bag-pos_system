import OrderModel from '../Model/OrderModel.js';
import { orders } from '../db/Database.js';

// Display all orders
export function displayOrders() {
    console.log("call displayOrders funtion");
    const orderTable = $('.invoice-table tbody');
    orderTable.empty();

    orders.forEach((order, index) => {
        orderTable.append(`
            <tr>
                <td>${order.getInvoiceId()}</td>
                <td>${order.getCustomerId()}</td>
                <td>${order.getOrderDate()}</td>
                <td>$${order.getTotalPrice()}</td>
                <td>
                    <button class="btn btn-warning order-view-btn" data-index="${index}">View</button>
                </td>
            </tr>
        `);
    });
}

$(document).ready(function () {
    console.log("call ready funtion");
    displayOrders();
    console.log("Orders : "+orders);
});

// Event delegation to handle dynamically added "View" buttons
$(document).on('click', '.order-view-btn', function () {
    const index = $(this).data('index');
    const selectedOrder = orders[index];

    // Generate HTML for order items
    const orderItemsHTML = selectedOrder.getOrderItem().map(item =>
        `<li>${item.title} - $${item.price} x ${item.quantity} = $${item.totalPrice}</li>`
    ).join('');

    // Display order details in SweetAlert
    Swal.fire({
        title: 'Order Details',
        html: `
            <p>Invoice ID: <strong>${selectedOrder.getInvoiceId()}</strong></p>
            <p>User ID: <strong>${selectedOrder.getUserId()}</strong></p>
            <p>Customer ID: <strong>${selectedOrder.getCustomerId()}</strong></p>
            <p>Order Date: <strong>${selectedOrder.getOrderDate()}</strong></p>
            <p>Order Time: <strong>${selectedOrder.getOrderTime()}</strong></p>
            <p>Payment Method: <strong>${selectedOrder.getPaymentMethod()}</strong></p>
            <p>Subtotal: <strong>$${selectedOrder.getSubTotal()}</strong></p>
            <p>Service Tax: <strong>$${selectedOrder.getServiceTax()}</strong></p>
            <p>Total Price: <strong>$${selectedOrder.getTotalPrice()}</strong></p>
            <p>Balance: <strong>$${selectedOrder.getBalance()}</strong></p>
            <p>Products:</p>
            <ul>
                ${orderItemsHTML}
            </ul>
        `,
        confirmButtonText: 'Close',
        customClass: {
            popup: 'custom-popup',  // Custom class for styling
            title: 'custom-title',   // Custom class for title
            htmlContainer: 'custom-html-container', // Custom class for HTML container
        },
        background: '#f7f7f7', // Optional background color
        width: '600px', // Optional width
    });
});