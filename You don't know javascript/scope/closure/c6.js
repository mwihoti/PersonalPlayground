var keeps = [];

for ( var i = 0; i < 5; i++) {
    let j = i
    keeps[i] = function keep(){
        return j;
        
    }
}
console.log(keeps[3]())