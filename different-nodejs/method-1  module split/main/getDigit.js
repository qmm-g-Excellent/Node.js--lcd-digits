function getDigit (inputs) {
    if(!inputs){
        inputs = prompt("请输入数字:","");
    }
    var digits = [];
    for (var i = 0; inputs != 0; i++) {
        digits[i] = inputs % 10;
        inputs = Math.floor(inputs/10);
    }
    digits.reverse();
    return digits;
}
module.exports = getDigit;