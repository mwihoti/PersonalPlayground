let fruitMap = new Map([
    ["apple", 5],
    ["banana", 3],
    ["grapes", 15]
]);

for (let [key, value] of fruitMap) {
    console.log(key, value)
}