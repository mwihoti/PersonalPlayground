// reduce() to find the maximum value in an array
const reps = [4, 5, 18, 20, 50, 3, 10]

const maxReps = reps.reduce((max, cur) => {
    if (cur > max) max = cur;
    return max
})
console.log(maxReps)