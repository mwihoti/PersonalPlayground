function twenty () {
    return 20
}
function myNumber () {
  return  (twenty () + 1)* 2
}
myObj = {
    favoriteNum: myNumber()
}
console.log(myObj)