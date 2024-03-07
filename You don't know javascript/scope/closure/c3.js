function makeCounter() {
    var count = 0;

    return function getCurrent() {
        count = count + 1;

        return count;
    }
}
var hit = makeCounter();
for (let i = 0; i < 10; i++){
    console.log(hit())
}
