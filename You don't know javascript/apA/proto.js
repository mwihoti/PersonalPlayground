function classRoom () {

}
classRoom.prototype.welcome = function hello ()
{
    console.log("Hello good students")
}
var greet = new classRoom()
greet.welcome()