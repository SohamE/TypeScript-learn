class Player {
    // Two types of access modifier - Public, Private
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

const pet = new Player("Simba", "test");
// not allowed
// pet.updateScore();