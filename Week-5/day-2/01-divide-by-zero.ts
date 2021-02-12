// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

let divider: (input: number) => void = function (
    input
) {
    if (input > 0) {
        return console.log(input / 10);
    } else if (input < 0) {
        console.log(input / 10);
    } else {
        throw Error(`Can not divide by 0!`);
        ;
    }
}

try {
    divider(-100);
}
catch (err) {
    console.log(err.message);
}