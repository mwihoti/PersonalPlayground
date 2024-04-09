const person = {
    name: ['Bob', 'smith'],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        let me = `Hi I'm ${this.name[0]}.`
        console.log(me)
        
        
    }
}

person.bio();
person.introduceSelf();
person.age