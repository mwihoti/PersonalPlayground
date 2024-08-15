let arr = [
    {name: 'Alice', score: 90 },
    {name: 'Bob', score: 85 },
    {name: 'Alice', score: 95 },
    {name: 'Bob', score: 80 },
    {name: 'Charlie', score: 85 }
];

let grouped = arr.reduce((acc, curr) => {
    if(!acc[curr.name]){
        acc[curr.name] = [];
    }
    acc[curr.name].push(curr.score);
    return acc;
}, {});

Object.keys(grouped).forEach(name => {
   let value = grouped[name];
   let average = value.reduce((acc, curr) => acc + curr) / value.length;
   grouped[name] = average;
});
console.log(grouped)