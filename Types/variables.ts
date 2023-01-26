let movieTitle: string = "Test Movie";
let myNumber: number = 42;
let myBoolean: boolean = true;

movieTitle = "Arrival";
movieTitle.toUpperCase();
// Not allowed
// movieTitle = 9;
// movieTitle.upper();

// Type Inference

let myVariable = "Test";

// by type inference the variable type has been infered to String based on the data.

let myNew;
// If we dont set any value while defining, the type is set to <any>, which is not advisable, we should
// add type explicitly if this is the case.