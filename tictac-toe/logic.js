// consecutive player turn

let turn =  1;

$("button").click(function () {
    if (turn == 1) {
        $("#screen").text("PLAYER 2 TURN FOLLOWS");

        // check sign font from font-awesome
        $(this).addClass("fa fa-check");
        turn = 2;
    }
    else {
        $("#screen").text("PLAYER ! TURN FOLLOWS");

        // cross sign font 
        $(this).addClass('fa fa-times');
        turn = 1;
    }
})