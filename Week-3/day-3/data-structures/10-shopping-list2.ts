// Represent the following products with their prices

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
  'SChicken Breasts': 4,
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
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)
