// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?
let shoppingList: string[] = [`eggs`, `milk`, `fish`, `apples`, `bread`, `chicken`];
function shoppingListApplication(a, b) {
    let include = shoppingList.includes(`a`);
    if (include = true) {
        console.log(a + ` is on the List.`);
    } else if (include = false) {
        console.log(a + ` is not on the List`);
    } else {
        console.log(`error`);
    }
    let include2 = shoppingList.includes(`b`);
    if (include2 = true) {
        console.log(b + ` is on the List.`);
    } else if (include2 = false) {
        console.log(b + ` are not on the List`);
    } else {
        console.log(`error`);
    }
}
shoppingListApplication(`milk`, `bananas`);

