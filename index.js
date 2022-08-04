let first = false;
let second = false;
let buildFirst = "";
let buildSecond = "";
let firstNum = null;
let secondNum = null;
let operator = null;
let result = 0;
let current = "";
let temp = result;

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

one.onclick = () => addNumbers("1")
two.onclick= () =>  addNumbers("2")
three.onclick= () => addNumbers("3") 
four.onclick= () =>  addNumbers("4")
five.onclick= () =>  addNumbers("5")
six.onclick= () =>  addNumbers("6")
seven.onclick= () => addNumbers("7") 
eight.onclick= () => addNumbers("8") 
nine.onclick= () =>  addNumbers("9")
zero.onclick= () =>  addNumbers("0")
add.onclick= () =>  addOperator('+')
minus.onclick= () => addOperator('-') 
divide.onclick= () =>  addOperator('/')
multiply.onclick= () => addOperator('*') 
equals.onclick= () =>  calculate('=')
resetBtn.onclick = () => resetAC();

const addNumbers = (number) => {
    if(!first) {
        buildFirst += number;
        current = buildFirst;
        showCurrent();
    } else {
        buildSecond += number;
        current = `${firstNum} ${operator} ${buildSecond}`
        showCurrent();
    }
}

const addOperator = (op) => {
    firstNum = buildFirst;
    first = true;
    operator = op;
    current = firstNum + " " + operator;
    showCurrent();
}

const reset = () => {
    buildFirst = "";
    buildSecond = "";
    first = false;
    second = false;
    firstNum = null;
    secondNum = null;
    operator = null;
    result = 0;
}

const showCurrent = () => {
    resultText.innerHTML = current;
}

const resetAC = () => {
    buildFirst = "";
    buildSecond = "";
    first = false;
    second = false;
    firstNum = null;
    secondNum = null;
    operator = null;
    result = 0;
    resultText.innerHTML = "0"
}

//Calculate result depending on inputs
const calculate = () => {
    secondNum = buildSecond;
    switch(operator) {
        case '+':
            result = parseInt(firstNum) + parseInt(secondNum);
            break;
        case '-':
            result = parseInt(firstNum) - parseInt(secondNum);
            break;
        case '*':
            result = parseInt(firstNum) * parseInt(secondNum);
            break;
        case '/':
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
        default:
            result = 0;
    }
    resultText.innerHTML = `${firstNum} ${operator} ${secondNum} = ${result}`;
    temp = result;
    setTimeout(() => {
        resultText.innerHTML = temp
      }, 2000)
    reset();
}