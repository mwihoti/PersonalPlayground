var studentName = "Suzy"

function printName(studentName){
    studentName = studentName.toUpperCase();
    console.log(studentName)
    console.log(window.studentName);
}
studentName = "Edward"
printName("Daniel")

console.log(studentName)