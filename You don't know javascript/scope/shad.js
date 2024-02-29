var special = 1;

function lookingFor(special) {
    another = {
        spec: special
    }

    function keepLooking(){
        var special = 3.1432;
        console.log(special);
        console.log(another.spec)
        console.log(window.special)
    }
    keepLooking()
}
lookingFor(123323)