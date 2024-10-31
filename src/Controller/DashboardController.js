
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
