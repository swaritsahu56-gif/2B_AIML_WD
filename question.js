// // An e-commerce company wants to manage product information. Each product has a product ID, product name, price, and quantity.

// // Task: Create a user-defined object in JavaScript that:

// // 1. stores the product details,
// // 2. has a method to calculate total price,
// // 3. has a method to update quantity,
// // 4. displays all product information.

// function product(productId, productName, price, quantity) { 

//     this.ID=productId;
//     this.name=productName;
//     this.price=price;
//     this.quantity=quantity;
//     this.calculateTotalPrice = function() {
//        total= this.price * this.quantity;
//         return total;
//     };
//     this.updateQuantity = function(newQuantity) {
//         this.quantity = newQuantity;
//         }


//     }
//     let p1=new product(101,"Laptop",50000,2);
//     let p2=new product(102,"Mobile",20000,3);
//     let p3=new product(103,"Tablet",15000,5);

//     console.log("Product 1: ", p1);
//     console.log("Product 2: ", p2);
//     console.log("Product 3: ", p3);
//     console.log("calculatetotalprice of product 1: ", p1.calculateTotalPrice());



// E-commerce Product Object

let product = {
    // 1. Product details
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    // 2. Method to calculate total price
    calculateTotalPrice: function() {
        return this.price * this.quantity;
    },

    // 3. Method to update quantity
    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    },

    // 4. Method to display all product information
    displayProduct: function() {
        console.log("Product ID: " + this.productId);
        console.log("Product Name: " + this.productName);
        console.log("Price: ₹" + this.price);
        console.log("Quantity: " + this.quantity);
        console.log("Total Price: ₹" + this.calculateTotalPrice());
    }
};

// Display product information
console.log("----- Product Information -----");
product.displayProduct();

// Update quantity
product.updateQuantity(3);

console.log("\n----- After Updating Quantity -----");
product.displayProduct();


