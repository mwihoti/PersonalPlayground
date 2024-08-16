const obj = {
    a: "Foo",
    b() {
        return this.a;
    },
};

console.log('Method object: ',obj.b())