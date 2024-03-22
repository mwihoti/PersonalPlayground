function greetStudent(studentName) {
    return function greeting () {
    console.log(`Hello, ${studentName}!`)
    }
}

var nm = greetStudent("Dante");

nm()