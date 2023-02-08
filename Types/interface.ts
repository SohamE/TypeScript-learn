// Interface helps us describe objects

interface Person {
    readonly name: string;
    age: number;
    nickname?: string;
    sayHi?: (greet: string) => string; // SayHi is a method which must return a string value;
    // sayHi(): string; // same
}

const Abby: Person = { name: "Abby", age: 23 };

const thomas: Person = {
    name: "Thomas",
    age: 35,
    nickname: "tom",
    sayHi(greet: string) {
        return `${greet} from ${this.name}`;
    }
};

// thomas.name = "Dank"; Error as readonly property