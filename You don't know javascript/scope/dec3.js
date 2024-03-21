function diff(x,y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y =tmp;
    }
    return y - x
}
v = diff(4,9)
console.log(v)