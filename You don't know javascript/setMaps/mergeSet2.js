function MergeSet(set, map) {
    return new Map(
        [...set].map(key => [key, map.get(key) || 'undefined'])
    )
}

let myMap = new Set ([1, 2, 3, 4, 5, 6])
let mySet = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five']])

let merged = MergeSet(myMap, mySet)
console.log(merged)