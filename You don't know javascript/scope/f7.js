
{
    let count = 0;
    hits = function getCurrent(){
        count = count + 1;
        return count;
    }
}
hits();
hits();
console.log(hits())