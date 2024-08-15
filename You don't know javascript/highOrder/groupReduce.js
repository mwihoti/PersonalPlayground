// use reduce() to group objects in an array

const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((product, productGroup) => {
    const name = productGroup.name;
    if (product[name] == null) {
        product[name] = [];
    }
    product[name].push(productGroup);


    return product;

}, {});
console.log(products)