// Represent the following products with their prices

import { Key } from 'readline';

let ProductPriceList: object = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.6,
  'Chicken Breast': 9.4,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.1,
};

let bobsShoppingList: object = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

let alicesShoppingList: object = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};
// Create an application which solves the following problems.
// How much does Bob pay?
function spendings(list: Object, priceList: Object): number {
  let spendings: number = 0;
  for (let i: number = 0; i < Object.keys(list).length; i++) {
    for (let j: number = 0; j < Object.keys(priceList).length; j++) {
      if (Object.keys(list)[i] === Object.keys(priceList)[j]) {
        spendings += Object.values(list)[i] * Object.values(priceList)[j];
      }
    }
  }
  return spendings;
}
console.log(spendings(bobsShoppingList, ProductPriceList).toFixed(2));
// How much does Alice pay?
console.log(spendings(alicesShoppingList, ProductPriceList).toFixed(2));
// Who buys more Rice?
function moreProduct(productToCompare): string {
  for (let i: number = 0; i < Object.keys(bobsShoppingList).length; i++) {
    let indexOfProduct1 = Object.keys(bobsShoppingList).indexOf(productToCompare);
    let indexOfProduct2 = Object.keys(alicesShoppingList).indexOf(productToCompare);
    if (indexOfProduct1 === -1) {
      return `Alice bought more ${productToCompare}`;
    } else if (indexOfProduct2 === -1) {
      return `Bob bought more ${productToCompare}`;
    } else if (Object.values(bobsShoppingList)[indexOfProduct1] > Object.values(alicesShoppingList)[indexOfProduct2]) {
      return `Bob bought more ${productToCompare}`;
    } else if (Object.values(bobsShoppingList)[indexOfProduct1] < Object.values(alicesShoppingList)[indexOfProduct2]) {
      return `Alice bought more ${productToCompare}`;
    } else if (
      Object.values(bobsShoppingList)[indexOfProduct1] === Object.values(alicesShoppingList)[indexOfProduct2]
    ) {
      return `They bought same amount of ${productToCompare}`;
    } else {
      return `No such product to compare.`;
    }
  }
}

// Who buys more Potato?
console.log(moreProduct(`Potato`));
// Who buys more different products?
console.log(moreProduct(`Chicken Breasts`));
// Who buys more products? (piece)
