let operand1 = null;
let operand2 = null;
let nextOperation = null;
let isWaitingForOperand = false;

let operations = {};
operations.add = add;
operations.subtract = subtract;
operations.multiply = multiply;
operations.divide = divide;

const screen = document.querySelector(".screen");
screen.textContent = 0;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (screen.textContent == 0 && screen.textContent.indexOf(".") === -1 ||
            isWaitingForOperand)
        {
            screen.textContent = digitButton.textContent;
            isWaitingForOperand = false;
        }

        else
        {
            screen.textContent += digitButton.textContent;
        }
    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (isWaitingForOperand)
        {
            nextOperation = operatorButton.value;
        }

        else if (operand1 == null)
        {
            operand1 = Number(screen.textContent);
            nextOperation = operatorButton.value;
            isWaitingForOperand = true;
        }

        else if (operand2 == null)
        {
            operand2 = Number(screen.textContent);
            operand1 = operate(operand1, operand2, operations[nextOperation]);
            screen.textContent = operand1;
            operand2 = null;
            nextOperation = operatorButton.value;
            isWaitingForOperand = true;
        }
    })
})

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", () => {
    if (screen.textContent.indexOf(".") === -1)
    {
        screen.textContent += dotButton.textContent;
    }
})

const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", () => {
    if (operand1 == null)
    {
        return;
    }

    operand2 = Number(screen.textContent);

    screen.textContent = operate(operand1, operand2, operations[nextOperation]);
    operand1 = null;
    operand2 = null;
    nextOperation = null;
    isWaitingForOperand = true;
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    screen.textContent = 0;
    operand1 = null;
    operand2 = null;
    nextOperation = null;
    isWaitingForOperand = false;
})

function add(number1, number2)
{
    return number1 + number2;
}

function subtract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    return number1 / number2;
}

function operate(number1, number2, callback)
{
    return callback(number1, number2);
}