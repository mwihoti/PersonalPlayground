function lookupStudent(studentId) {
    return function getID () {
        var mg = "Your student ID is:"
        console.log(`${mg}, ${studentId}`)
    }
}
var look = lookupStudent(20);
look()