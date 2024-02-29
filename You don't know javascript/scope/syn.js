function saySomething() {
    var greeting = "Hello";
    
    {
        
        let greeting = "Hi";
        greeting = "Howdy";
        console.log(greeting)
    }
}
saySomething()