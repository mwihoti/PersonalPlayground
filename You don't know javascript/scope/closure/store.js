var groceries = [
    {
        name: 'Bananas',
        price: '10',
        quantity: '3',
        id: 12
    },
    {
        name: 'Oranges',
        price: '15',
        quantity: '8',
        id:13
    },
    {
        name: 'Cabbages',
        prices: '50',
        quantity: '30',
        id: 14
    },
    {
        name: 'Potatoes',
        prices: '60',
        quantity: '50kg',
        id: 15
    }
]
function mamaStore (veg) {

    for (let veges of groceries){
        if (veges.id == veg)
        {
            return {name: veges.name, price: veges.prices}
        }

    }
   
}

var groc = mamaStore(15);
console.log(groc)