import ProductModel from "../Model/ProductModel.js";
import CustomerModel from "../Model/CustomerModel.js";
import UserModel from "../Model/UserModel.js";


export let customers = [
    new CustomerModel(
        "C001",
        "Alice Johnson",
        "alice.johnson@example.com",
        "123-456-7890",
        "123 Main St, Springfield, IL"
    ),
    new CustomerModel(
        "C002",
        "Bob Smith",
        "bob.smith@example.com",
        "234-567-8901",
        "456 Elm St, Springfield, IL"
    ),
    new CustomerModel(
        "C003",
        "Charlie Brown",
        "charlie.brown@example.com",
        "345-678-9012",
        "789 Maple St, Springfield, IL"
    ),
    new CustomerModel(
        "C004",
        "Diana Prince",
        "diana.prince@example.com",
        "456-789-0123",
        "321 Oak St, Springfield, IL"
    ),
    new CustomerModel(
        "C005",
        "Ethan Hunt",
        "ethan.hunt@example.com",
        "567-890-1234",
        "654 Pine St, Springfield, IL"
    )
];

// export let products = JSON.parse(localStorage.getItem('products')) || [];

export let products = [
    new ProductModel(
        'B001',
        'Blue T-Shirt',
        'Clothing',
        19.99,
        50,
        'https://via.placeholder.com/100x100.png?text=Blue+T-Shirt'
    ),
    new ProductModel(
        'B002',
        'Wireless Mouse',
        'Electronics',
        25.99,
        30,
        'https://via.placeholder.com/100x100.png?text=Wireless+Mouse'
    ),
    new ProductModel(
        'B003',
        'Water Bottle',
        'Accessories',
        10.5,
        100,
        'https://via.placeholder.com/100x100.png?text=Water+Bottle'
    ),
    new ProductModel(
        'B004',
        'Running Shoes',
        'Footwear',
        59.99,
        20,
        'https://via.placeholder.com/100x100.png?text=Running+Shoes'
    ),
    new ProductModel(
        'B005',
        'Notebook',
        'Stationery',
        5.0,
        200,
        'https://via.placeholder.com/100x100.png?text=Notebook'
    )
];

export let users = [
    new UserModel(
        "U001",
        "admin",
        "john.doe@example.com",
        "admin"
    ),
    new UserModel("U002",
        "admin",
        "jane.smith@example.com",
        "admin"
    )
];