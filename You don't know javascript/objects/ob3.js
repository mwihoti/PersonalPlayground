function person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const dan = new person('Dan');
dan.introduceSelf()