function whatsTheDeal(id, defaultId = () => id) {
    var id;
    console.log(`local variable 'id': ${ id }`);
    console.log(`parameter id (closure): ${defaultId()}`);

    console.log("Reassugning 'id' to 5");
    id = 5;

    console.log(`local variable 'id': ${id}`);
    console.log(`parameter id (closure): ${defaultId()}`)
}
whatsTheDeal(9)