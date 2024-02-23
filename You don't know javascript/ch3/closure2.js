function counter(step = 1) {
    var count = 0;
    return function increaseCount(){
        count = count + step;
        console.log(count);
        
        
        
    }
    
}

var incBy1 = counter(1);
var incBy2 = counter(3);

incBy2()
incBy1();
incBy1();
incBy1();
incBy1()
incBy2()