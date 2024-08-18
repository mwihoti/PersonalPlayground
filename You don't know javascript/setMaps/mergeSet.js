function mergeSetMap(set, map) {
    return new Map(
        [...set].map(key => [key, map.get(key) || 'undefined'])
    )
}
let mySet = new Set([1, 2, 3, 4, 5, 6]);
let myMap = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five']]);

let result = mergeSetMap(mySet, myMap);
console.log(result)