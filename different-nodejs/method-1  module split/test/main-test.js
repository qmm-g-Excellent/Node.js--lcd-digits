var getDigit = require('../main/getDigit.js');
var wholeStringDigits = require('../main/wholeStringDigits');
var digitsTransform = require('../main/digitsTransform');
var buildStringDigits = require('../main/buildStringDigits');
var toString = require('../main/toString');
var IcdDigits = require('../main/main');

describe('getDigit()', function () {
    var inputs = 123;
    var inputs1 = 2;

    it('should print correct digits', function () {
        var expectDigits = [1, 2, 3];

        expect(getDigit(inputs)).toEqual(expectDigits);
    });

    it('should print correct digit', function () {
        var digits = getDigit(inputs1);
        var expectDigits = [2];

        expect(getDigit(inputs1)).toEqual(expectDigits);
    });
});

describe('stringTransform()', function () {
    var digits = [2, 0];
    var allStringDigits = [{digit: 0, string: ['._.', '|.|', '|_|']},
                           {digit: 2, string: ['._.', '._|', '|_.']}];

    it('should get stringDigits', function () {
        var stringDigits = digitsTransform(digits, allStringDigits);

        expectStringDigits = [['._.', '._|', '|_.'], ['._.', '|.|', '|_|']];
        expect(stringDigits).toEqual(expectStringDigits);
    });
});

describe(' buildStringDigits()', function () {
    var stringDigits = [['._.', '._|', '|_.'], ['._.', '|.|', '|_|']];

    it('should get tempArray', function () {
        var tempArray = buildStringDigits(stringDigits);
        var expectTempArray = ['._. ._. ', '._| |.| ', '|_. |_| '];

        expect(tempArray).toEqual(expectTempArray);
    });
});

describe(' IcdDigits()', function () {
    var inputs = 20;
    var inputs2 = 2;

    it('should get correct stringDigits', function () {
        var expectResult = '\n' + '._.' + ' ' + '._.' + ' ' + '\n'
                                + '._|' + ' ' + '|.|' + ' ' + '\n'
                                + '|_.' + ' ' + '|_|' + ' ' + '\n';

        expect(IcdDigits(inputs)).toEqual(expectResult);
    });

    it('should get correct stringDigits', function () {
        var expectResult = '\n' + '._.' + ' ' + '\n'
                                + '._|' + ' ' + '\n'
                                + '|_.' + ' ' + '\n';

        expect(IcdDigits(inputs2)).toEqual(expectResult);
    });
});
