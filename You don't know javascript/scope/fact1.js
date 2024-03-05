function hideTheCache () {
    var cache = {};

    return factorial;
    function factorial(x) {
        if (x < 2) return 1;
        if (!(x in cache)){
            cache[x] = x * factorial(x-1)

        }
        return cache[x];

    }
}
var factorial = hideTheCache()
console.log(factorial(7))
