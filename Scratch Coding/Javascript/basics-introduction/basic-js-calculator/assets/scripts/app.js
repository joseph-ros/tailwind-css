const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

const additionResult = add(1, 2);

currentResult = additionResult;

let calculationDescription = `(${defaultResult} + 5) * 5 / 2 - 5`;

outputResult(currentResult, calculationDescription);