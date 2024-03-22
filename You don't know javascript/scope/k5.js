let size = 5;

if (!size || isNaN(parseInt(size))) {
    console.log("Missing Size")
}
else {
    const squareSize = parseInt(size);
    let square = ""

    for (let i = 0; i < squareSize; i++) {
        

        for (let j = 0; j < squareSize; j++) {
         
            
            square += "x";
    
        }
    }
   
    console.log(square)
}