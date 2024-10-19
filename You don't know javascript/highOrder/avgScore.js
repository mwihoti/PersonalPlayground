// find the average scores grouped by names in an array of objects in JavaScript

const scores = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 70 },
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 80 },
    { name: 'Charlie', score: 95 }
];

const groupedScores = scores.reduce((acc, val) => {
    if (!acc[val.name]) {
        acc[val.name] = { totalScore: 0, count: 0};
    }
    acc[val.name].totalScore += val.score
})