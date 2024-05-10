//Property descriptors

myObj = {
    favoriteNumber: 42,
    isDeveloper: true,
    firstName: "Kyle"

};

 obj = Object.getOwnPropertyDescriptor(myObj, "firstName")
 console.log(obj)
 obj = Object.defineProperty(myObj, "lastName", {
    value: "Doe",
    writable: true,
    enumerable: true,
    configurable: true
 })
 Object.defineProperty(myObj, "age", {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
})

 
 console.log(obj)