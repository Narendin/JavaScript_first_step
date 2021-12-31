"use strict"

class Product2{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let product2 = new Product2("car", 1000);
product2.make25PercentDiscount();

console.log(product2.price);