const anotherObj = {};

Object.defineProperty(anotherObj,"fave",{
    get() { console.log("Getting 'fave' value!"); return 123; },
    set(v) { console.log(`Ignoring ${v} assignment.`); }
});
console.log(anotherObj.fave)
change = anotherObj.fave = 42;
console.log(change)
console.log(anotherObj.fave)