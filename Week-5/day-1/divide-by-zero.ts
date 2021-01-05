let divider: (input: number) => any = function (
    input
) {
    if (input > 0) {
        return console.log(input / 10);
    } else if (input < 0) {
        console.log(input / 10);
    } else {
        console.log(`Can not divide by 0!`);
    }
}

divider(0);