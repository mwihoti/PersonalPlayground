let pineapples = [0,1,2,3,4,5,6,7,8,9];
let apples = ["a","b","c","d","e","f","g","h","i","j"];
let mangoes = pineapples.flatMap((fruit, index) => [fruit, apples[index]]);
console.log(mangoes);