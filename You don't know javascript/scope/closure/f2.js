var students = [
    {id: 14, name: "Kyle"},
    {id: 73, name: "Suzy"},
    {id: 112, name: "Frank"},
    {id: 6, name: "Sarah"}
];

function getFirstStudent() {
    return function firstStudent() {
        return students[0].name;
    };
}

var student = getFirstStudent()
student()
