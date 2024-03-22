function manageStudentGrades(studentRecords) {
    var grades = studentRecords.map(getGrade);
    var ids = studentRecords.map(getId);

    return {
        addGrade: addGrade,
        addIds: addIds}

    function getGrade(record) {
        return record.grade;
    }
   
    function getId(idr){
        return idr.id
    }

    function sortAndTrimGradeList(){
        grades.sort(function desc(g1, g2) {
            return g2 - g1;
        });

        grades = grades.slice(0, 10);

    }

    function addIds(newId){
        ids.push(newId);
        return ids;

    }
    function addGrade(newGrade) {
        grades.push(newGrade);
        sortAndTrimGradeList();
        return grades;
    }
  
}

var addNextGrade = manageStudentGrades([
    { id: 14, name: "Kyle", grade: 86 },
    { id: 73, name: "Suzy", grade: 87 },
    { id: 112, name: "Frank", grade: 75 },
    // ..many more records..
    { id: 6, name: "Sarah", grade: 91 }
])



var updatedGrades = addNextGrade.addGrade(81);
console.log(updatedGrades);

var updatedGrades = addNextGrade.addIds(68);
console.log(updatedGrades);