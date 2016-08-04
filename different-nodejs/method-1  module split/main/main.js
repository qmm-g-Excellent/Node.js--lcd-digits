var getDigit = require('./getDigit.js');
var wholeStringDigits = require('./wholeStringDigits');
var digitsTransform = require('./digitsTransform');
var buildStringDigits = require('./buildStringDigits');
var toString = require('./toString');

function IcdDigits (inputs) {
    var digits = getDigit(inputs);
    var allStringDigits = wholeStringDigits();
    var stringDigits = digitsTransform(digits, allStringDigits);
    var tempArray = buildStringDigits(stringDigits);
    var string = toString(tempArray);
    return string;
}
module.exports = IcdDigits ;