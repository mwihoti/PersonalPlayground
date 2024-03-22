function storeStudntInfo(id, name, grade) {
    return function getInfo (whichValue) {
        var val = eval(whichValue);
        return val;
    }
}

var info = storeStudntInfo(73, "Suzy", 87);
info("name");
console.log(info("name"))