function makeCounter() {
    var count = 0;

    return function getCurrent () {
        count = count + 1;
        return count;
    }
}
var hits = makeCounter();
hits();
hits();
hits();
console.log(hits())