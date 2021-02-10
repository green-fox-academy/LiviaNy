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
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};
// Create an application which solves the following problems.
function solvingApp(products: Object) {
  // How much is the fish?
  console.log(`The fish costs: ` + products[`Fish`]);
  // What is the most expensive product?
  let highestPrice: number = 0;
  for (let i: number = 0; i < Object.keys(products).length; i++) {
    if (Object.values(products)[i] > highestPrice) {
      highestPrice = Object.values(products)[i];
    }
  }
  console.log(highestPrice);
}

solvingApp(products);
