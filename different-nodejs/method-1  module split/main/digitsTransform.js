function digitsTransform (digits,allStringDigits){
    var stringDigits = [];
    digits.forEach(function(element){
        isExist(element,allStringDigits,stringDigits);
    });
    return stringDigits;
}

function isExist(element,allStringDigits,stringDigits){
    allStringDigits.forEach(function(item){
        if(item.digit === element)
            stringDigits.push(item.string);
    });
}
module.exports = digitsTransform;