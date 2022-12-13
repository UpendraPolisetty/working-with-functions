// definition of function :

function bigValue(){
   let num1 = +prompt("give me a first number");
    let num2 = +prompt("give me a second number");
    if(num1>num2){
        alert(`big number is ${num1} and small number is ${num2}`);
    }else if(num1==num2){
        alert(`${num1} and ${num2} both are equal`)
    }else {
        alert(`big number is ${num2} and small number is ${num1}`);
    }
}
 bigValue();// function execution or function calling


 // Accept a number from user and alert the squares of that number 

 // function definition
function getSquare() {
    let number = +prompt('give me a number');
    alert(`The sqaure of a ${number} is equal to ${number*number}`);
};

getSquare(); // function call