// We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.

`use strict`
// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982
// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

let phoneBook: object = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
}

// function app() {
//     console.log(phoneBook[`John K. Miller`]);
//     for (let key in phoneBook) {
//         if (phoneBook[key] === `307-687-2982`) {
//             console.log(key);
//         }
//     }
//     if (phoneBook.hasOwnProperty(`Chris E. Myres`) === true) {
//         console.log(`Chris E Myres is in the Book.`);
//     } else if (phoneBook.hasOwnProperty(`Chris E. Myres`) === false) {
//         console.log(`Chrise E. Myres is NOT in the Book.`);
//     } else {
//         console.log(`error`);
//     }
// }
// console.log(app())


function app(name: string, number: string, include: string) {
    console.log(phoneBook[name]);
    for (let key in phoneBook) {
        if (phoneBook[key] === number) {
            console.log(key);
        }
    }
    if (phoneBook.hasOwnProperty(include) === true) {
        console.log(include + ` is in the Book.`);
    } else if (phoneBook.hasOwnProperty(include) === false) {
        console.log(include + ` is NOT in the Book.`);
    } else {
        console.log(`error`);
    }
}
app(`John K. Miller`, `307-687-2982`, `Chris E. Myers`);