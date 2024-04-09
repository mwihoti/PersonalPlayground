const person = {
    name: {first: "Bob", 
            last: "Smith"},
    age: 23,
    bio () {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`)
    },
    intro () {

        console.log(`Hi i' am ${person.name.first}`)
    }
}
person.intro()
person.age = 45;
person["name"]["last"] = "Cratchit"

person.age;
person["name"]["last"];
person.bio()

person['eyes'] = 'Hazel';
person.farewell = () => {
    console.log("Bye everyOne");
};

person['eyes'];
person.farewell();
person