function adder(num1) {
    return function addTo(num2) {
        return num1 + num2
    }
}

var add10to = adder(20);
var addTo = adder(39)

console.log(add10to(15))
console.log(addTo(20))