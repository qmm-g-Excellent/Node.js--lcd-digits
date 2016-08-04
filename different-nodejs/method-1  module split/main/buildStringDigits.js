function buildStringDigits(stringDigits){
    var tempArray = [];
    for(var i = 0; i < 3; i++){
        format(stringDigits,tempArray,i);
    }
    return tempArray;
}

function format(stringDigits,tempArray,i){
    var temp = '';
    stringDigits.forEach(function(item){
        temp += item[i]+' ';
    });
    tempArray.push(temp);
}
module.exports = buildStringDigits;