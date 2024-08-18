let map = new Map([["a", 1], ["b", 2], ["c", 3]]);

let transformedMap =  new Map(
    Array.from(map, ([key, value]) => [key.toUpperCase(), value * 10])
)
console.log(transformedMap)