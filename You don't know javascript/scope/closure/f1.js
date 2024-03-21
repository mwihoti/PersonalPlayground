function say(myName) {
    var greeting = "Hello";
    output();

    function output () {
        console.log(
            `${greeting}, ${ myName}!`
        );
    }
}
say("Dante")