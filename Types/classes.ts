class Player {
    // Two types of access modifier - Public, Private, Protected
    // Private identifier - #<property>
    // By default all property are assigned Public.
    public readonly first: string;
    readonly last: string;
    // score will be infered to number type.
    // private property can only be accesed from within the class. 
    private score = 0;
    // This can be done in js with #<property>(#score). key difference -
    // 1. This changes the property name
    // 2. As this can be used es or higher, if we use in  ts we cannot compile it to es5-. 

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private updateScore(): void {
        this.score += 1;
    }
}

class Person {
    constructor(
        public first: string,
        public last: string,
        private score: number
    ) {}
    
    // getter
    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    //setter
    get getScore(): number {
        return this.score;
    }

    set setScore(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this.score = newScore;
    }

}

const pet = new Player("Simba", "test");
// not allowed
// pet.updateScore();

const dan = new Person("Daniel", "Radcliff", 100);
dan.fullName;