const square = (numx: number, numy: number = 5): number | string => {
    if (numx == 0) {
        return "Value empty";
    } else {
        return numx * numy;
    }
}

square(10);
// square("asdasd"); X-Error-X

// Anonymous functions

let colors = ["Red", "Blue", "Green", "Yellow"];

colors.map((color) => {
    return false;
})

//Functions that return nothing

const myFunction = (num: string): void => {
    console.log(num);
    // return num X-Error-X
}

// Never type
// function never returns never anything/ loop never finishes/ finish when exception occurs
const neverStop = (): never => {
    while (true)
        console.log('never returns');
}

const makeError = (): never => {
    throw new Error("error");
}