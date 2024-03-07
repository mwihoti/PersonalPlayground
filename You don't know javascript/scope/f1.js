function sortNamesByLength(names) {
    var buckets = [];

    for (let firstName of names){
        if (buckets[firstName.length] == null) {
            buckets[firstName.length] = [];
        }
        buckets[firstName.length].push(firstName);

    }
    {
        let sortedNames = [];

        for (let bucket of buckets) {
            if (bucket)
            //sort each bucket alphanumeric
         {
                bucket.sort();

                // append the sorted names to our running list
                sortedNames = [
                    ...sortedNames,
                    ...bucket
                ]

            }
        }
        return sortedNames;
    }
    
}
let names = sortNamesByLength([
    "Sally",
    "Suzy",
    "Frank",
    "John",
    "Jennifer",
    "Scott",
    "Antonny",
    "Ann"
]);
console.log(names)