import { indexOf } from '../strings/01-simple-replace';

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
  console.log(`The most expensive product is: ` + Object.keys(products)[Object.values(products).indexOf(highestPrice)]);

  // What is the average price?
  let average: number = 0;
  for (let i: number = 0; i < Object.keys(products).length; i++) {
    average += Object.values(products)[i];
  }
  console.log(`Average value of products: ` + (average = average / Object.keys(products).length).toFixed(2));

  // How many products' price is below 300?
  let counter: number = 0;
  for (let k: number = 0; k < Object.keys(products).length; k++) {
    if (Object.values(products)[k] < 300) {
      counter++;
    }
  }
  console.log(`There are ${counter} products price below 300`);

  // Is there anything we can buy for exactly 125?
  for (let l: number = 0; l < Object.keys(products).length; l++) {
    if (Object.values(products)[l] === 125) {
      console.log(`You can buy ` + Object.keys(products)[l] + `for 125`);
    }
  }
  // What is the cheapest product?
  let lowestPrice: number = Object.values(products)[0];
  for (let i: number = 0; i < Object.keys(products).length; i++) {
    if (Object.values(products)[i] < lowestPrice) {
      lowestPrice = Object.values(products)[i];
    }
  }
  console.log(`The least expensive product is: ` + Object.keys(products)[Object.values(products).indexOf(lowestPrice)]);
}

solvingApp(products);
