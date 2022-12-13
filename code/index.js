/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

//solution :
 function sayhello(name){
    alert(name);
 }
sayhello("Upendra polisetty");


/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
 //solution :

 function getFullName(firstName,lastName){
    let fullName = firstName+" "+lastName;
    return fullName;
 }
let fullname =getFullName("Upendra","Polisetty");
alert(fullname);


// getFullName("John", "Snow")
// getFullName("Nelson", "Mandela")
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

//solution :

function addTwoNumbers(firstNum,secondNum){
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number'){
        alert(`enter valid input`);
    }else{
        let sum = firstNum+secondNum;
        return sum;
    }
}
addTwoNumbers(10,20);




/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

// solution :

function calc ( numA, numB, operation ) {
    if ( typeof numA !== 'number' || typeof numB !== 'number' ) {
        alert ( `Enter valid input` )
    } else if ( operation == "add" ) {
        alert ( numA + numB );
    } else if ( operation == "sub" ) {
        alert ( numA - numB);
    } else if ( operation == "mul" ) {
        alert ( numA * numB);
    } else if ( operation == "Div" ) {
        alert( numA / numB );
    };
};

calc(3,3,"add");



/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

//solution :
function isLeapYear(year){
    if( year % 400 === 0 ||  year % 4 === 0 ){
        return (true);
    }else if ( year % 100 === 0 ){
        return (false);
    }
}
isLeapYear ( Number(2014) )




/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

//solution :

function getFactorial ( number ) {
    let fraction =1;
    for ( i=number ; i>=1 ; i-- ) {
        fraction *= i;
    }
    return fraction;
}
getFactorial(3);