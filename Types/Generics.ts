const numberArr: Array<Number> = [];
const stringArr: Array<String> = [];
// const string2Arr: string[] = [];

function identity<T>(item: T): T {
    return item;
}

identity<Number>(10);
identity<String>("test");
identity<Boolean>(true);

function getRandomElement<T>(items: Array<T>): T {
    return items[0];
}

getRandomElement<Boolean>([true, false, false]);
getRandomElement<Number>([10, 20, 30]);
getRandomElement<String>(["test", "new", "stop"]);
// getRandomElement<Cat>([]);

const t: number = getRandomElement([1]);

// Type Inference.
// If we remove the type during calling the function ts can infer the type based
// on the value we pass.
// getRandomElement([true, false, false]); the return type will be infered to boolean.

getRandomElement(["1", false, false]);

//Generics with multiple type

function merge<T,U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    };
}

const mergedObj = merge({name: 'name1'}, {age: 10})

//Adding type constraints

function merge2<T extends Object,U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    };
}

interface Lenghty {
    length: number;
}

const myObj: Lenghty = {
    length: 10,
}

function getLength<T extends Lenghty>(item: T) {
    return item.length;
}

getLength("asad");
getLength(myObj);
getLength([1,2,3]);
// getLength(1); Integer doesnot have length property.
