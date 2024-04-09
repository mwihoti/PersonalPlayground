class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const dan = new Person ("Daniel");
dan.introduceSelf()

class Professor extends Person {
    teaches;
    constructor(name, teaches ) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
            `My name is ${this.name}, and I will be your ${this.teaches} professor. `,
        )
    }
    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Professor('walsh', 'English');
walsh.introduceSelf()

walsh.grade("mypaper")