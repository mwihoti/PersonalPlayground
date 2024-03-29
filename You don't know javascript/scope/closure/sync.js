function getLabels(studentsIDs) {
    return studentsIDs.map(
        function formatIDLabel(id){
            return `Student ID: ${
                String(id).padStart(6)
            }`;
        }
    );
}
var label = getLabels([24, 733422223, 23, 6]);
console.log(label)