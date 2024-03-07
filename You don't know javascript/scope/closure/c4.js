var hits ;
{
    let count = 0;
    hits = function getCurrent(){
        count = count + 1;
        return count;
    }
    for (let i = 0; i < 10; i++) {
        console.log(hits())
    }
}
