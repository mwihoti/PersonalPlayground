// reduce() to sum up all the elements in an array
const arr = [1, 2, 3, 4, 5]

const getSum = arr.reduce((max, cur) => {
    return max + cur
}, 0);
console.log(getSum);