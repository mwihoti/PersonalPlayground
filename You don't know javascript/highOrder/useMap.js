// Suppose we want to add 10 to every element in a array.
// We can use the map() method to map over every element in the array to add 10 to it.

const arr = [1, 2, 3, 4, 5];

const sumTen = arr.map((num) => 
    num += 10

)

console.log(sumTen)