`use strict`

//Create an empty map where the keys are integers and the values are characters
let map:object = {
    1: `a`,
    2: `b`,
    3: `c`
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
console.log(Object.keys(map).length)