/*1. Define a function named sayHello when called alert saying "Hello JavaScript".
-Call above function.
-Store the return value in a variable named one
-What is the typeof the value in one */

//solution :

function sayHello(){
    alert( "Hello World" );
}

let one = sayHello();
console.log(typeof(one));

/*2. Change function (from Part 1 above) to accept name from user using prompt and store it in a variable named usename and alert message saying Hello [username].
-Call above function.
-Store the return value in a variable named two
-What is the typeof the value in two */

//solution  :

function sayHello(){
 let username = prompt("Enter Your name here ");
    alert(`Hello ${username}`);
}
let two = sayHello();
console.log(two);
console.log( typeof two);




/* 3.Change the function (from Part 2 above) to accept username as a parameter not from prompt.*/

function sayHello(username){
   alert( `Hello ${username}` );
}
alert(sayHello("uppi"))
let three = sayHello("uppi");
console.log(three);
console.log( typeof three);


//solution :

/* 3. Change (from Part 3 above) return the message Hello username instead of alerting it.

-Call above function.
-Store the return value in a variable named four
-What is the typeof the value in four */

//solution :

function sayHello(username){
    return `Hello ${username}`;
}
let four = sayHello("uppi");
console.log(four);
console.log( typeof four);

// Example of default parameter

// function with parameters :

// function add(a,b){
//     return a+b;// NaN
// }
// add();

// function add(a,b){
//     return a+b;// NaN
// }
// add(1);

// function with default parameters

function add(a=0,b=0){
    return a+b;// 0
}
add();

function add(a=0,b=0){
    return a+b;// 1
}
add(1);
function add(a=0,b=0){
    return a+b;// 0
}
add(undefined);

/* Assignment: Function Return
(Discuss this block)
What would the following function return (not output) when called? Write the output next to function call. */
-

function test() {
  alert('Hello');
}
test(); // output : undefined
-

function test() {
  return;
}
test(); // output : undefined
-

function test() {
  return 21;
}
test(); // output : 21
-

function test() {
  return null;
}
test(); // output : null
-

function test() {
  console.log('hello'); 
}
test(); // output : undefined
-

function test() {
  prompt('Enter your age?');
}
test(); // output : undefined
-

function test() {
  return prompt('Enter you age');
}
test(); // output : "11"
-

function test() {
  return function second() {};
}
test(); // output : f second()

/* What will be the value of test variable in the snippet below */

function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let test1 = sayHello(); // Hello John

/* What will be the value of test variable and output of console.log() in the snippet below */

let username1 = 'Sam';
function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let tes2t = sayHello();// output : Hello John
console.log(username); // output : sam
/* mWhat will be the value of test and output of console.log() variable in the snippet below */

let username = 'Sam';
function sayHello() {
  return `Hello ${username}`;
}
let test = sayHello(); // Hello Sam
console.log(username); // output : sam