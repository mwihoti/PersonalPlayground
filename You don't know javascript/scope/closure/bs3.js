function sortNamesByLength(names) {
    var buckets = [];

    for (let firstName of names) {
        if (buckets[firstName.length] == null) {
            buckets[firstName.length] = [];
        }
        buckets[firstName.length].push(firstName);
    }

    {
        let  sortedNames = [];

        for (let bucket of buckets) {
            if (bucket) {
                bucket.sort();

                sortedNames = [
                    ...sortedNames,
                    ...buckets
                ];
            }
        }
        return sortedNames;
    }
}

let nm = sortNamesByLength([
    "Sally",
    "Suzy",
    "Frank",
    "John",
    "Jennifer",
    "Scott"
]);

console.log(nm)