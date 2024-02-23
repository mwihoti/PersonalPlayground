/* closure - is when a function remembers and continues to access variables from outside its scope even when function 
is called from different scope */
function greeting (msg) {
    return function who (name) {
        console.log(`${ msg }, ${name}`)
    }
}
var hello = greeting("Hello")
var dan = greeting("Dante")
hello("My name is Faustine")
dan(" mpenda wote")