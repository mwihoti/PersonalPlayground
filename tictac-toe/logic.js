let turn = 1;

$("button").click(function () {
    // Check if the button already has a move
    if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-check")) {
        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "white");
        }, 800);
        return; // Exit the function if the button is already played
    }

    // Set the player's move
    if (turn == 1) {
        $("#screen").text("PLAYER 2 TURN FOLLOWS");
        $(this).addClass("fa fa-check");
        check("fa-check"); // Check for win after player 1's move
        turn = 2;
    } else {
        $("#screen").text("PLAYER 1 TURN FOLLOWS");
        $(this).addClass("fa fa-times");
        check("fa-times"); // Check for win after player 2's move
        turn = 1;
    }
});

// Function to check the winning move
function check(symbol) {
    if ($(".sq1").hasClass(symbol) &&
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol)) {
        highlightWinningSquares([".sq1", ".sq2", ".sq3"]);
        return true;
    } else if ($(".sq4").hasClass(symbol) &&
               $(".sq5").hasClass(symbol) &&
               $(".sq6").hasClass(symbol)) {
        highlightWinningSquares([".sq4", ".sq5", ".sq6"]);
        return true;
    } else if ($(".sq7").hasClass(symbol) &&
               $(".sq8").hasClass(symbol) &&
               $(".sq9").hasClass(symbol)) {
        highlightWinningSquares([".sq7", ".sq8", ".sq9"]);
        return true;
    } else if ($(".sq1").hasClass(symbol) &&
               $(".sq4").hasClass(symbol) &&
               $(".sq7").hasClass(symbol)) {
        highlightWinningSquares([".sq1", ".sq4", ".sq7"]);
        return true;
    } else if ($(".sq2").hasClass(symbol) &&
               $(".sq5").hasClass(symbol) &&
               $(".sq8").hasClass(symbol)) {
        highlightWinningSquares([".sq2", ".sq5", ".sq8"]);
        return true;
    } else if ($(".sq3").hasClass(symbol) &&
               $(".sq6").hasClass(symbol) &&
               $(".sq9").hasClass(symbol)) {
        highlightWinningSquares([".sq3", ".sq6", ".sq9"]);
        return true;
    } else if ($(".sq1").hasClass(symbol) &&
               $(".sq5").hasClass(symbol) &&
               $(".sq9").hasClass(symbol)) {
        highlightWinningSquares([".sq1", ".sq5", ".sq9"]);
        return true;
    } else if ($(".sq3").hasClass(symbol) &&
               $(".sq5").hasClass(symbol) &&
               $(".sq7").hasClass(symbol)) {
        highlightWinningSquares([".sq3", ".sq5", ".sq7"]);
        return true;
    } else {
        return false;
    }
}

// Helper function to highlight winning squares
function highlightWinningSquares(squares) {
    squares.forEach(square => {
        $(square).css("color", "green");
    });
}

// Resetting the game
function reset() {
    $("#screen").text("PLAYER 1 TURN FOLLOWS");
    $("#screen").css("background-color", "transparent");
    $(".r").removeClass("fa fa-check");
    $(".r").removeClass("fa fa-times");
    turn = 1;

    // Reset colors
    $(".sq1").css("color", "black");
    $(".sq2").css("color", "black");
    $(".sq3").css("color", "black");
    $(".sq4").css("color", "black");
    $(".sq5").css("color", "black");
    $(".sq6").css("color", "black");
    $(".sq7").css("color", "black");
    $(".sq8").css("color", "black");
    $(".sq9").css("color", "black");
}