// Primitive and custom type can be used as array.
const activeUsers: string[] = [];
const activeUsersNum: number[] = [];
const isActive: Array<Boolean> = [true, false, false];

activeUsers.push('Tom');
activeUsersNum.push(1);

// Multidimentional
const board: string[][] = [["X", "0", "X"], ["X", "0", "X"], ["X", "0", "X"]];
const board2: Array<Array<string>> = [["X", "0", "X"], ["X", "0", "X"], ["X", "0", "X"]];

type Product = {
    name: string;
    price: number;
};

const Products: Product[] = [{ name: "coffee mug", price: 10 }, { name: "Table lamp", price: 15 }];

let getTotal = (Products: Product[]): number => {
    let sum: number = 0;
    Products.forEach(e => {
        sum += e.price;
    });
    return sum;
};

console.log(getTotal(Products));