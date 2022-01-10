"use strict"

function Product1(name, price){
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

let product1 = new Product1("basket", 500);
product1.make25PercentDiscount();

console.log(product1.price);