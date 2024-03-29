//Regular function declaration
function regularFunction () {
    console.log("This is a regular function");
}
regularFunction();

// Arrow function declaration
const arrowFunction = () => {
    console.log("This is an arrow function");
};
arrowFunction();

//Anonymous function
const anonymousFunction = function () {
    console.log("This is an anonymous function.")
};
anonymousFunction();

//Lexical 'this' behavior
const obj = {
    name: "Lexi",
    regularFunction: function() {
        console.log("Regular method:", this.name);
    },
    arrowMethod: () => {
        console.log("Arrow method:", this.name);
    }

}
obj.regularFunction();
obj.regularFunction();