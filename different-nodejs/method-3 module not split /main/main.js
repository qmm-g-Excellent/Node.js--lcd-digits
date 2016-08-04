function getDigit(inputs) {
    var digits = [];
    for (var i = 0; inputs != 0; i++) {
        digits[i] = inputs % 10;
        inputs = Math.floor(inputs/10);
    }
    digits.reverse();
    return digits;
}

function wholeStringDigits() {
    var allStringDigits = [
        {digit: 0, string: ['._.', '|.|', '|_|']},
        {digit: 1, string: ['...', '..|', '..|']},
        {digit: 2, string: ['._.', '._|', '|_.']},
        {digit: 3, string: ['._.', '._|', '._|']},
        {digit: 4, string: ['...', '|_|', '..|']},
        {digit: 5, string: ['._.', '|_.', '._|']},
        {digit: 6, string: ['._.', '|_.', '|_|']},
        {digit: 7, string: ['._.', '..|', '..|']},
        {digit: 8, string: ['._.', '|_|', '|_|']},
        {digit: 9, string: ['._.', '|_|', '..|']}
    ];
    return allStringDigits;
}

function digitsTransform(digits,allStringDigits){
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

function buildStringDigits(stringDigits){
    var tempArray = [];
    for(var i = 0; i < 3; i++){
     print(stringDigits,tempArray,i);
   }
   return tempArray;
}

function print(stringDigits,tempArray,i){
    var temp = '';
    stringDigits.forEach(function(item){
       temp += item[i]+' ';
    });
     tempArray.push(temp);
}

function toString(tempArray){
    var string = '\n';
    tempArray.forEach(function(element){
        string += element + '\n';
    });
    return string;
}

function lcdDigits(inputs){
    var digits = getDigit(inputs);
    var allStringDigits = wholeStringDigits();
    var stringDigits = digitsTransform(digits,allStringDigits);
    var tempArray =  buildStringDigits(stringDigits);
    var string = toString(tempArray);
    console.log(string);
}

exports.digits = getDigit;
exports.singalDigit = digitsTransform;
exports.buildDigit = buildStringDigits;
exports.lcdDigit = lcdDigits;
