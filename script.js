const calcMath = document.getElementById("calculator-panell-math");
const calcResult = document.getElementById("calculator-panell-result");
const calcButtons = document.getElementById("calculator-buttons");

let firstNumer ="";
let secondNumber ="";
let operator = ""
let count = 0;

calcButtons.addEventListener("click", function(e){
    const button = e.target;
    const buttonValue = button.textContent;

    if (buttonValue === "C"){

        resetVars();
        
    } else if (button.classList.contains("number")){
        if(count == 0){
        if(operator.length > 0){
        secondNumber = secondNumber + buttonValue;
         } else{
        firstNumer = firstNumer + buttonValue;
        }
        } else {resetVars();}
        count = 0;

    } else if (button.classList.contains("operator")){
        if (firstNumer.length === 0 || secondNumber.length !==0){
            return;
        }
        operator = buttonValue;
    } else if (buttonValue === "="){
        if(secondNumber === 0){
            return;
        }
        
        firstNumer = +firstNumer;
        secondNumber = +secondNumber;


        if (operator === "/"){
            calcResult.textContent = firstNumer / secondNumber;
        } else if (operator === "*"){
            calcResult.textContent = firstNumer * secondNumber;
        } else if (operator === "-"){
            calcResult.textContent = firstNumer - secondNumber;
        } else if (operator === "+"){
            calcResult.textContent = firstNumer + secondNumber;
        } else if (operator === "%"){
            calcResult.textContent = firstNumer/100*secondNumber;
        }

        count+=1;

    } else if (buttonValue === "."){
        let number = (operator.length > 0) ? secondNumber : firstNumer;
        if (number.length === 0 || number.includes(".")){
            return;
        }

        if(operator.length > 0){
            secondNumber = secondNumber + buttonValue;
        } else{
        firstNumer = firstNumer + buttonValue;
        }

    } 

    calcMath.textContent = firstNumer + operator + secondNumber;

});

function resetVars(){
    firstNumer ="";
    secondNumber ="";
    operator = "";
    calcMath.textContent = "";
    calcResult.textContent = "";
}