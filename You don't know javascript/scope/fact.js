var cache = {};

function factorial(x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
        cache[x] = x * factorial(x - 1)
    }
    return cache[x]
}

console.log(factorial(7))