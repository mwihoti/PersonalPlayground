const obj = {
    *g() {
        let index = 0;
        while (true) {
            yield index++;
        }
    }
};

const it = obj.g();
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)