const divideButton = document.querySelector('.divide');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const resetButton = document.querySelector('.reset');
const operands = document.querySelector('.operand');

const history = document.querySelector('.layer.top');
const current = document.querySelector('.layer.bottom');

const back = document.querySelector('.back');
const buttons = document.querySelector('.button');
const numbers = [...document.querySelectorAll('.number')];
const decimal = document.querySelector('.decimal');

let historyValue = "";
let finalValue = "";
let currentValue = "";
let previousValue = "";
let currentOp;
let opMode = false;

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b == 0) {
        return 'nice try';
    }
    return a / b;
}

const operate = (a, b, operation) => {
    return operation(a, b);
}

const inputNumber = (number) => {
    currentValue += number;
    current.innerText = currentValue;
    console.log(currentOp, previousValue, currentValue);
};

const addDecimalPt = () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
    console.log(currentValue);
}

const removeLast = (string) => {
    return string.slice(0, -1);
}

const doOperation = () => {
    finalValue = operate(previousValue, Number(currentValue), currentOp);
    historyValue += `${previousValue}` + `${(currentOp == add) ? '+' :
                                            (currentOp == subtract) ? '-' :
                                            (currentOp == divide) ? '/' : 'x'}` + `${currentValue}`;
    currentValue = finalValue;
    console.log(`${finalValue}, ${previousValue}, ${currentValue}`);
    history.innerText = historyValue;
    historyValue = '';
    current.innerText = currentValue;
    opMode = false;
}

/////////////////////////////////////////////////////////////////////////////////////

divideButton.addEventListener('click', () =>{
    if (!opMode) {
        currentOp = divide;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;

    } else {
        doOperation();
        currentOp = divide;
        previousValue = Number(currentValue);   
        currentValue = "";
        opMode = true;
    }
});

addButton.addEventListener('click', () =>{
    if (!opMode) {
        currentOp = add;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;

    } else {
        doOperation();
        currentOp = add;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;
    }
});

subtractButton.addEventListener('click', () =>{
    if (!opMode) {
        currentOp = subtract;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;
    } else {
        doOperation();
        currentOp = subtract;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;
    }
});

multiplyButton.addEventListener('click', () =>{
    if (!opMode) {
        currentOp = multiply;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;
    } else {
        doOperation();
        currentOp = multiply;
        previousValue = Number(currentValue);
        currentValue = "";
        opMode = true;
    }
});

/////////////////////////////////////////////////////////////////////////////////////

equalsButton.addEventListener('click', doOperation);

resetButton.addEventListener('click', () => {
    currentValue = "";
    previousValue = 0;
    finalValue = 0;
    history.innerText = "";
    current.innerText = "";
    opMode = false;
});

back.addEventListener('click', () => {
    currentValue = removeLast(currentValue);    
    current.innerText = currentValue;
});

decimal.addEventListener('click', addDecimalPt);
numbers.forEach(number => {
    number.addEventListener('click', () => {
        inputNumber(number.innerText);
    });
});


