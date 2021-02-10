'use strict';
// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

let nameToGreet: string = `Green Fox`;

// function greet(name) {
//     console.log(`Greetings, dear ` + name);
// }

// greet(nameToGreet);

let greeter: (name: string) => void = function (
    name: string) {
    return console.log(`Greetings, dear ` + name);
}

greeter(nameToGreet);