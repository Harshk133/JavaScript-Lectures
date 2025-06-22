// Javascript is a dynamically typed language
// let, const 

// // following are the simple variables
// let var_name = "John"; 
// var_name = "Harsh"; // reassigning the variable
// let rollno = 101;
// console.log(var_name, rollno);

// // following are the constant variables
// const pi = 3.14;
// const a = 10;
// console.log(pi);


// variable scopes
// global, local scope
// let a = 30;

// if(true){
//     let a = 20; // local scope
//     console.log("inside the if block", a); // prints 20
// }

// console.log("out side the if block", a); // prints 30

let a = 2;
let b = 3;
let c = a + b; // addition
console.log("The sum of a and b is: ", c); // prints 5
console.log("The sum of a and b is: " + c); // prints 5

// Rules for declaring variables
// 1. letter, digits, underscore, $ are allowed
// 2. cannot start with a digit
// 3. cannot use reserved keywords
// 4. case sensitive


let a2_$ = 10; // valid variable name
let b2 = 20; // valid variable name
// let const = 20;
let name = "John"; // valid variable name
let Name = "Doe"; // valid variable name, case sensitive