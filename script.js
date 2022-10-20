let operand1 = null;
let operand2 = null;

const screen = document.querySelector(".screen");
screen.textContent = 0;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (screen.textContent == 0 && screen.textContent.indexOf(".") === -1)
        {
            screen.textContent = digitButton.textContent;
        }

        else
        {
            screen.textContent += digitButton.textContent;
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

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    screen.textContent = 0;
    operand1 = null;
    operand2 = null;
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