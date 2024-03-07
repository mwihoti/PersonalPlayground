function lookUpStudent(studentId) {
    var students = [
        {id: 14, name: "Kyle"},
        {id: 73, name: "Suzy"},
        {id: 112, name: "Frank"},
        {id: 6, name:"Sarah"}
    ];
    return function greetStudent(greeting){

        var student = students.find(
            student => student.id == studentId
        );
        return `${ greeting },  ${student.name }!`
    };
}

var chosenStudents = [
    lookUpStudent(6),
    lookUpStudent(112)
]
console.log(chosenStudents[0]("Hello"));
