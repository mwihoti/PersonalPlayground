function classRoom(teacher) {
    return function study() {
        console.log(
            `${teacher} says to study ${this.topic}`
        )
    }
}
var assignement = classRoom("Kyle");
var homework = {
    topic: "JS",
    assignement: assignement
}
assignement()
homework.assignement()