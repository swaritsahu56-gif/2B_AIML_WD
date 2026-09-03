function Product(productId, productName, price, quantity) { 

    this.ID=productId;
    this.name=productName;
    this.price=price;
    this.quantity=quantity;
    this.calculateTotalPrice = function() {
       total= this.price * this.quantity;
        return total;
    };
    this.updateQuantity = function(newQuantity) {
        this.quantity = newQuantity;
        }
    this.displayProduct = function(){
        console.log("product id: "+this.ID);
        console.log("product name: " +this.name);
        console.log("product price: "+this.price);
        console.log("product quantity: "+this.quantity);
        console.log("product total price: "+this.calculateTotalPrice());

    }
}
let product = new Product(101,"kurkure",20,11); 


console.log("---------     product information      --------");
product.displayProduct();

product.updateQuantity(12);

console.log("-----------       product info after new quatity         ------------------------");
product.displayProduct();
