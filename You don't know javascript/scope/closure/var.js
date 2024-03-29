function getStudents (data) {
    var studentsRecords = [
        {
            id: "12",
            name: "Ian",

        },
        {
            id:13,
            name: "Doreen",
        }
    ];

    for (let record of data.records) {
        let id = `student-${record.id}`;
        
        studentsRecords.push({
            id :id,
            name: record.name
        });
    }
    return studentsRecords;
}
var exampleData = {
    records: [
        { id: 14, name: "Alice" },
        { id: 15, name: "Bob" }
    ]
};

console.log(exampleData)
