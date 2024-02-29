var students = [
    { id: 14, name: "Kyle" },
    {id: 73, name: "Suzy" },
    {id: 112, name: "frank" },
    { id: 6, name: "Sarah"}
];
function getStudentName(studentId) {
    for (let student of students){
        if (student.id == studentId) {
            return student.name;
        }
    }
}
var nextStudent = getStudentName(73)
console.log(nextStudent)
console.log(typeof(nextStudent))
console.log(student)