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