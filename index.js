let firstNum = null;
let secondNum = null;
let operator = null;
let result = 0;

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const equals = document.querySelector('#equals')
const resetBtn = document.querySelector('#reset');

const resultText = document.querySelector('#resultText');

one.onclick = () => addNumbers(1)
two.onclick= () =>  addNumbers(2)
three.onclick= () => addNumbers(3) 
four.onclick= () =>  addNumbers(4)
five.onclick= () =>  addNumbers(5)
six.onclick= () =>  addNumbers(6)
seven.onclick= () => addNumbers(7) 
eight.onclick= () => addNumbers(8) 
nine.onclick= () =>  addNumbers(9)
zero.onclick= () =>  addNumbers(0)
add.onclick= () =>  addOperator('+')
minus.onclick= () => addOperator('-') 
divide.onclick= () =>  addOperator('/')
multiply.onclick= () => addOperator('*') 
equals.onclick= () =>  calculate('=')
resetBtn.onclick = () => resetAC();

const addNumbers = (number) => {
    if(firstNum === null) {
        firstNum = number;
    } else {
        secondNum = number;
    }
}

const addOperator = (op) => {
    operator = op;
}

const reset = () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    result = 0;
}

const resetAC = () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    result = 0;
    resultText.innerHTML = "0"
}

//Calculate result depending on inputs
const calculate = () => {
    switch(operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            result = 0;
    }
    resultText.innerHTML = `${firstNum} ${operator} ${secondNum} = ${result}`;
    reset();
}