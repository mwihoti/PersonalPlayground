/* object linkage */
var homework = {
    study () {
        console.log(`Please study ${this.topic}`)
    }
}

var jsHomework = Object.create(homework)
jsHomework.topic = "Javascript"
jsHomework.study()

var pyHomework = Object.create(homework);
pyHomework.topic = "Python"
pyHomework.study()