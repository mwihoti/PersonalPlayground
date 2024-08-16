const obj = {
    async *foo() {
        yield 1;
        yield 2
    }
}

async function main() {
 const it = obj.foo();
 console.log((await it.next()).value);
 console.log((await it.next()).value)


}
main()
