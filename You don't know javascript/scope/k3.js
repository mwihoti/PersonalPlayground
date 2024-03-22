function manageBtnClickEvents(btn) {
    var clickHandlers = [];

    return function listener(cb) {
        if (cb) {
            let clickHandler = function onClick(evt){
                console.log("cliked!");
                cb(evt);
            };
            clickHandlers.push(clickHandler);
            btn.addEventListener(
                "click",
                clickHandler
            )
        }
        else {
            for (let handler of clickHandlers) {
                btn.removeEventListener(
                    "click",
                    handler
                )
            }
            clickHandlers = []
        }
    }
}

var onSubmit = manageBtnClickEvents(mySubmitBtn);

onSubmit(function checkout(evt){

});
onSubmit(function trackAction(evt){
    // log action to analytics
});

// later, unsubscribe all handlers:
onSubmit();