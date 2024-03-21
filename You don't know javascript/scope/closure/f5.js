function adder(num1) {
    return function addTo (num2) {
        return num1 + num2;
    };
}
var add10To = adder(10);
var add42To = adder(42);

add10To(15)