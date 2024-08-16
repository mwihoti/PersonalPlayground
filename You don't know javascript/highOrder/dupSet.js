// Remove duplicates using the Set object and the spread syntax, sort the resulting
// array in ascending order
//using the sort() method, then return the value at index 1.

const array = [5, 2, 9, 2, 3, 5];

const secondSmallet = [...new Set(array)]

console.log(secondSmallet)
const value = secondSmallet.sort((a, b) => a - b)[0];
console.log(value)