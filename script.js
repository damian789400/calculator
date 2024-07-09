let calculator = document.getElementById('calculator');



function zero() {
    calculator.value += '0';
    

}

function one() {
    calculator.value += '1';
}

function two() {
    calculator.value += '2';
}

function three() {
    calculator.value += '3';
}

function four() {
    calculator.value += '4';
}

function five() {
    calculator.value += '5';
}

function six() {
    calculator.value += '6';
}

function seven() {
    calculator.value += '7';
}

function eight() {
    calculator.value += '8';
}

function nine() {
    calculator.value += '9';
}

function dot() {
    calculator.value += '.';
}

function divide() {
    calculator.value += '/';
}

function plus() {
    calculator.value += '+';
}

function minus() {
    calculator.value += 'minus';
}

function multiply() {
    calculator.value += '*';
}

function clearDisplay() {
     calculator.value = '';
   
}

function raise() {
    calculator.value += '**';
}

function root() {
    calculator.value = Math.sqrt(calculator.value);
}

function equals () {
    calculator.value = eval(calculator.value);
}










