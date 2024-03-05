function diff(x,y) {
    if (x < y ) {
        let tmp = x;
        x = y;
        y = tmp;
    }
   
    return x - y;
}
console.log(diff(29, 7))