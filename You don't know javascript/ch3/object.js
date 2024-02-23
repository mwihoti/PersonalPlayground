var homework = {
    topic: "JS"
};

var otherHomeWork = Object.create(homework);
var home = otherHomeWork.topic
console.log(home)
otherHomeWork.topic = "Math"
var other = otherHomeWork.topic
console.log(other)