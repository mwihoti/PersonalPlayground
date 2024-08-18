let myMap = new Map();

myMap.set('a', 1);
myMap.set('b',2);
myMap.set('c',3);
myMap.set('d',4);


// print odd numbers
let newMap = new Map([...myMap].filter(([k,v])=> v%2 ));
console.log(newMap);

// print even numbers
let newMap2 = new Map([...myMap].filter(([k,v]) => !(v%2)));
console.log("Even numbers", newMap2)