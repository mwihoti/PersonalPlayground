// Average Weight

const weights = [60, 40, 55, 65, 80];
const totalWeight = weights.reduce((acr, tot) => acr + tot)
console.log(totalWeight)
const avgWeight = totalWeight / weights.length;
console.log(avgWeight)