var factorial = (function hideTheCache(){
    var cache = {};

    function factorial(x) {
        if (x < 2) return 1;
        if (!(x in cache))
        {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x]
    }
    return factorial

}) ();
console.log(factorial(5))