// Typeof Guard
// Type narrowing using Typeof Guard, this can be used with primitive types.
function triple(value: number | string) {
    if (typeof value == 'string') {
        return value.repeat(3);
    } else {
        return value * 3;
    }
}

// Truthiness Guard
// Type narrowing using Truthiness Guard.
function testWord(word: string | null) {
    // if undefined or empty string.
    if (!word) {
        return "not present";
    }
    return word.repeat(3);
} 

// Equality Type Guard
// Type narrowing using Equality Type Guard.
// ===  -> type and value matching
// ==   -> value matching using type cohersion.

// In Operator Guard
const per = {name: "kitty", age: 3};

"name" in per;

interface Movie {
    title: string,
    duration: number
}

interface TvShow {
    title: string
    numEpisodes: number
    duration: number
}

function getRuntime(media: Movie|TvShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.duration;
    }
    return media.duration
}

// Instanceof Narrowing
// to check if object is instance of some class

[1,2,3] instanceof Array; // true

// Type Predicates

interface Cat {
    name: String,
    numLives: number
}

interface Dog {
    name: string
    breed: string
}

// return type animal must match the parameter name.
// The function should return boolean.
function isCat(animal: Cat | Dog): animal is Cat{ // if this function returns true then animal is Cat, otherwise it is Dog
    return (animal as Cat).numLives !== undefined;
    // return "asda"; -- Not allowed
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal;
        return "Meow";
    } else {
        animal;
        return "Bark";
    }
}


// Disciminated Unions
// Each interface has a common property with literal type to disciminate

interface Rooster {
    kind: "rooster"
    name: string
    weight: number
    age: number
}
interface Cow {
    kind: "cow"
    name: string
    weight: number
    age: number
}
interface Pig {
    kind: "pig"
    name: string
    weight: number
    age: number
}


type animal = Rooster | Cow | Pig;

function getShape(animal: animal) {
    switch (animal.kind) {
        case "rooster":
            animal; //Rooster type
            break;
        case "cow":
            animal; //Cow type
            break;
        case "pig":
            animal; //Pig type
            break;
    }
}

const Ben: Rooster = {
    name: "Ben Parker",
    weight: 1,
    age: 60,
    kind: "rooster",
}

// Exhaustiveness narrowing