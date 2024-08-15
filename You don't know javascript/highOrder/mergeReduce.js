// reduce() to merge different objects in a single object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const mergedObj = [obj1, obj2, obj3].reduce((cur, val) => {
    return { ...cur, ...val}
})

console.log(mergedObj)