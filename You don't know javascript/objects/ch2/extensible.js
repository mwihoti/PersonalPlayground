

let differentObj = {
    // Properties and methods of differentObj
};

let myObj = Object.create(differentObj); // myObj is now created with differentObj as its prototype

myObj.firstName = "Kyle";


myObj.nicknames = ["getify", "ydkjs"];
console.log(myObj);
myObj = Object.create(differentObj); // myObj is now created with differentObj as its prototype

console.log(myObj);

Object.preventExtensions(myObj); // Prevents further extensions to myObj

myObj.nicknames = ["getify", "ydkjs"];   // Attempting to add a new property, fails
myObj.favoriteNumber = 123;             // Modifying an existing property, works fine

console.log(myObj);
