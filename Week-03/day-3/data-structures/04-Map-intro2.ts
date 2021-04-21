`use strict`;
//Create a map where the keys are strings and the values are strings with the following initial values
let map2: object = {
  '978-1-60309-452-8': `A letter to Jo`,
  '978-1_60309_444-3': `Lupus`,
  '978-1-60309-444-3': `Red Panda and Moon Bear`,
  '978-1-60309-461-0': `The Lab`,
};
//Print all the key-value pairs in the following format
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
for (const [key, value] of Object.entries(map2)) {
  console.log(`${value}` + ` (ISMB:` + `${key}` + `)`);
}
//Remove the key-value pair with key 978-1-60309-444-3
delete map2['978-1-60309-444-3'];
//Remove the key-value pair with value The Lab
function GetKeyByValue(object, value) {
  return Object.keys(map2).find((key) => object[key] === value);
}
delete map2[GetKeyByValue(map2, `The Lab`)];
console.log(map2);
//Add the following key-value pairs to the map
map2['978-60309-450-4'] = `They Called Us Enemy`;
map2['978-60309-453-5'] = `Why Did We Trust Him?`;
//Print whether there is an associated value with key 478-0-61159-424-8 or not
//Solution1
// for(let key in map2){
//     if (key === "478-0-61159-424-8") {
//         console.log(`There is value with key:478-0-61159-424-8`);
//     } else if (key != "478-0-61159-424-8") {
//         console.log(`Required key is not found`);
//     } else {
//         console.log(`error`);
//     }
// }
if (map2.hasOwnProperty('478-0-61159-424-8') === true) {
  console.log(`There is value with key:478-0-61159-424-8`);
} else if (map2.hasOwnProperty('478-0-61159-424-8') === false) {
  console.log(`Required key is not found`);
} else {
  console.log(`error`);
}
//Print the value associated with key 978-1-60309-453-5
console.log(map2['978-1-60309-453-5']);
console.log(map2['978-60309-453-5']);
