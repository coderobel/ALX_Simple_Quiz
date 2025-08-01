function add(number1, number2){
    return number1 + number2;
};
function subtract(number1, number2){
    return number1 - number2;
};
function multiply(number1, number2){
    return number1 * number2;
};
function divide(number1, number2){
    return number1 / number2;
};
const num1 = parseFloat(document.getElementById('number1').value) || 0;
const num2 = parseFloat(document.getElementById('number2').value) || 0;
document.getElementById('add').addEventListener('click',
    function() {
        const result = add(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    }
);
document.getElementById('subtract').addEventListener('click', 
    function(){
        const result = subtract(num1, num2);
        document.getElementById("calculation-result").textContent = result;
    }
);
document.getElementById('multiply').addEventListener('click', 
    function(){
        const result = multiply(num1, num2);
        document.getElementById("calculation-result").textContent = result;
    }
);
document.getElementById('divide').addEventListener('click', 
    function(){
        const result = divide(num1, num2);
        document.getElementById("calculation-result").textContent = result;
    }
);