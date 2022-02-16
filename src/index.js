module.exports = function toReadable (number) {

    let result, resultUnits, resultOneDozens, resultDozens, resultHundred;

    number = number.toString();

    switch (number.length) {
        case 1:
            if (number[0] === '0') {
                result = zero;
            }else {
                result = comparisonUnits(number[0]);
            }
            break;

        case 2:
            if (number[1] === '0') {
                result = comparisonDozens(number[0]);

            } else if (number[0] === '1') {
                result = comparisonOneDozens(number[1]);

            } else {
                result = `${comparisonDozens(number[0])} ${comparisonUnits(number[1])}`;
            }
            break;

        case 3:
            resultHundred = `${comparisonUnits(number[0])} ${hundred}`;
            if (number[1] === '0' && number[2] === '0') {
                result = resultHundred;

            } else if (number[1] === '0') {
                result = `${resultHundred} ${comparisonUnits(number[2])}`

            } else if (number[2] === '0') {
                result = `${resultHundred} ${comparisonDozens(number[1])}`

            } else if (number[1] === '1') {
                resultOneDozens = comparisonOneDozens(number[2]);
                result = `${resultHundred} ${resultOneDozens}`;

            } else {
                resultUnits = comparisonUnits(number[2]);
                resultDozens = comparisonDozens(number[1]);
                result = `${resultHundred} ${resultDozens} ${resultUnits}`
            }
            break;
    }
    
    return result;       
}

const units = ['one','two','three','four','five','six','seven','eight','nine']
const oneDozen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const hundred = 'hundred';
const zero = 'zero';


function comparisonUnits(value) {
    value = Number(value);
    let res = units.find((elem, index) => index + 1 === value);
    return res;
}

function comparisonOneDozens(value) {
    value = Number(value);
    let res = oneDozen.find((elem, index) => index === (value - 1));
    return res;
}

function comparisonDozens(value) {
    value = Number(value);
    let res = dozens.find((elem, index) => index === (value - 1));
    return res;
}