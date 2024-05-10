myObj = {
    favoriteNumber: 42
};

myObj.firstName = "Kyle";  

myObj.nicknames = [ "getify", "ydkjs" ];  

console.log(myObj)// works fine

Object.preventExtensions(myObj);

myObj.nicknames = [ "getify", "ydkjs" ];   // fails
myObj.favoriteNumber = 123;                // works fine


console.log(myObj)