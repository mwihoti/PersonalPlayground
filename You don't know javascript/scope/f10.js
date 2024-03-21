var keeps = [];

for (let i = 0; i < 3; i++) {
    keeps[i] = function keepEach(){
        return i
    }
}
console.log(keeps[0]())
console.log(keeps[1]())
console.log(keeps[2]())
