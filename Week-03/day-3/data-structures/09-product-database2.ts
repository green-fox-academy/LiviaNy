`use strict`;

// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
let products: object = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550,
}
// Create an application which solves the following problems.
// Which products cost less than 201? (just the name)
let under: string[] = [];
Object.keys(products).forEach((key) => {
    if (products[key] < 201) {
        under.push(key);
    }
});
console.log(`These items are below 201 : ${under}`);
// Which products cost more than 150? (name + price)
let over: string[] = [];
Object.keys(products).forEach((key) => {
    if (products[key] > 150) {
        over.push(key, products[key]);
    }
})
console.log(`These items cost more than 150: ${over}`);
