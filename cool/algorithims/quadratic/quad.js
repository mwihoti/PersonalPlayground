function sumArray(arr) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        for ( let j = 0; j < arr.length; j++) {
            sum2 += arr[j];
        }
    }
    return sum + sum2
}
console.log(sumArray([2, 43]))