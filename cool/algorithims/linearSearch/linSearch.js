function linearSearch(arr, item) {
    for ( var i = 0;  i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return null;
}

console.log(linearSearch([12, 45, 56, 60, 43, 21], 21))