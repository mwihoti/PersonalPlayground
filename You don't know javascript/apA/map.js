/* Map - creates a new array populated with the results of calling a provided function on every element in the calling array*/
const nums = [2, 3, 4, 5]
const dbleNum = nums.map((x) => x*x*x)
console.log(dbleNum)