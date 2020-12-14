`use strict`

//Create an empty map where the keys are integers and the values are characters
let map: object = {
    1: `a`,
    2: `b`,
    3: `c`,
}
//Print out whether the map is empty or not
console.log(map);
//Add the following key-value pairs to the map
// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
map[97] = `a`;
map[98] = `b`;
map[99] = `c`;
map[65] = `A`;
map[66] = `B`;
map[67] = `C`;
//Print all the keys
for (let key in map) {
    console.log(key);
}
//Print all the values
console.log(Object.values(map));
//Add value D with the key 68
map[68] = `D`;
//Print how many key-value pairs are in the map
console.log(Object.keys(map).length);
//Print the value that is associated with key 99
console.log(map[99]);
//Remove the key-value pair where with key 97
delete map[97];
//Print whether there is an associated value with key 100 or not
// function KeyInObject(){
//     if (map.hasOwnProperty(`100`) === true) {
//         console.log(`There is a value with key 100 in the map`);
//     } else if (map.hasOwnProperty(`100`) === false) {
//         console.log(`There is no value with key 100 in the map`);
//     } else {
//         console.log(`error`);
//     } 
// }
// KeyInObject()
if (map.hasOwnProperty(100) === true) {
    console.log(`There is a value with key 100 in the map`);
} else if (map.hasOwnProperty(100) === false) {
    console.log(`There is no value with key 100 in the map`);
} else {
    console.log(`error`);
}
//Remove all the key-value pairs
for (let key in map) {
    delete map[key];
}
console.log(map);