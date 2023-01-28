// Type definition for general object.
let myObject: { name: string, quantity: number; } = {
    name: "Horizon New Dawn",
    quantity: 5
};

// Type definition for function parameter and return type.
let getObject = (myObject: { name: string, quantity: number; }): { name: string, quantity: number; } => {
    return myObject;
};

// Type Alias.
type Coordinate = {
    x: number,
    y: number;
};

type MyNum = number;

let age: MyNum = 10;
let position: Coordinate = { x: 3, y: 4 };
// This can be used for functions as object parameter type and return type.

// Nested object type definition

type Artist = {
    external_urls: {
        spotify: string;
    },
    href: string,
    name: string,
    type: string,
};

let artist: Artist = {
    external_urls: {
        spotify: "https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz"
    },
    href: "https://api.spotify.com/v1/artists/6fOMl44jA4Sp5b9PpYCkzz",
    name: "NF",
    type: "artist",
};

// Optional Object property
// Readonly modifier

type Point = {
    readonly x: number,
    y: number,
    z?: number; // z is optional
};

//Intersection types

type Cat = {
    lives: number;
};

type Dog = {
    breed: string;
};

type Catdog = Cat & Dog & {
    age: number;
};

let tom: Catdog = {
    lives: 5,
    breed: "german sheperd",
    age: 9
}
















