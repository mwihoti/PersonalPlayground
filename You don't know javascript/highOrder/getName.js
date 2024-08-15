// Suppose we only want their first and last name.
// We can simply use the map() method to extract it from the users array.

const { use } = require("bcrypt/promises")

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result)