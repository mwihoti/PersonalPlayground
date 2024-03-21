var keeps = [];
for (var i = 0; i < 3; i++) {
    let j = i;

    keeps[i] = function keepEach(){
        return j;
    }
}

console.log(keeps[0]())
console.log(keeps[1]())
console.log(keeps[2]())
