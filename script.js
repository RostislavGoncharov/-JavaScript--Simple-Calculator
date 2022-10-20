let operand1 = 0;

const screen = document.querySelector(".screen");
screen.textContent = operand1;

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (screen.textContent == 0)
        {
            screen.textContent = digitButton.textContent;
        }

        else
        {
            screen.textContent += digitButton.textContent;
        }

        operand1 = screen.textContent;
    })
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