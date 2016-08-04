var lcd = require('../main/main');
describe('getDigit()', function () {
    var inputs = 123;

    it('should print correct digits', function () {
        var digits = lcd.digits(inputs);
        var expectDigits = [1, 2, 3];

        expect(digits).toEqual(expectDigits);
    });
});

describe('stringTransform()', function () {
    var digits = [2, 0];

    var allStringDigits = [{digit: 0, string: ['._.', '|.|', '|_|']},
        {digit: 2, string: ['._.', '._|', '|_.']}];
    it('should get stringDigits', function () {
        var stringDigits = lcd.singalDigit(digits, allStringDigits);

        expectStringDigits = [['._.', '._|', '|_.'], ['._.', '|.|', '|_|']];
        expect(stringDigits).toEqual(expectStringDigits);
    });
});

describe(' buildStringDigits()', function () {
    var stringDigits = [['._.', '._|', '|_.'], ['._.', '|.|', '|_|']];

    it('should get tempArray', function () {
        var tempArray = lcd.buildDigit(stringDigits);
        var expectTempArray = ['._. ._. ', '._| |.| ', '|_. |_| '];

        expect(tempArray).toEqual(expectTempArray);
    });
});

describe(' lcdDigits()', function () {
    var inputs = 20;

    it('should get correct stringDigits', function () {
        spyOn(console, 'log');
        lcd.lcdDigit(inputs);
        var expectResult = '\n' + '._.' + ' ' + '._.' + ' ' + '\n'
            + '._|' + ' ' + '|.|' + ' ' + '\n'
            + '|_.' + ' ' + '|_|' + ' ' + '\n';

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });
});
