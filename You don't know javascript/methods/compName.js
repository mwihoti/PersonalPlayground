const bar = {
    foo0() {
        return 0
    },
    foo1() {
        return 1
    },
    ["foo" + 2]() {
        return 'foo'
    },
    foo4() {
        return "Your G Mwihoti"
    }
}

console.log(bar.foo0());
console.log(bar.foo1())
console.log(bar.foo2())
console.log(bar.foo4())
