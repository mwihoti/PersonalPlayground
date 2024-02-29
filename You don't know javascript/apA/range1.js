function range (start, end){
function getRange(start, end){
    var ret = [];
    for (let i=start; i <= end; i++){
       ret.push(i)
    }
    return ret;
}
start = Number(start) || 0;
if (end == undefined){
    return function getEnd(end){
        return getRange(start, end)
    }
}
else {
    end = Number(end) || 0;
    return getRange(start, end)
}
}
console.log(range(3,9))