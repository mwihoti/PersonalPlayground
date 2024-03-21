function lookupStudent(studentId) {
    var students = [
        { id: 14, name: "Kyle" },
        { id: 73, name: "Suzy" },
        { id: 112, name: "Frank" },
        { id: 6, name: "Sarah" }
    ];

    return function greetStudent(greeting) {
        var student = students.find(
            student => student.id == studentId
        );

        return `${ greeting }, ${ student.name }!`;
    }
}

var chosenStudents = [
    lookupStudent(6),
    lookupStudent(112)
];
//accessing function name
let v = chosenStudents[0].name;
console.log(v)


let m = chosenStudents[1]("Hello");
console.log(m)