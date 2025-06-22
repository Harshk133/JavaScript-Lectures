/* this
is
a multiline comment */
// Datatypes in Javascript 
// to see the datatype of the variable, we can use the typeof operator

// String
// Number 
// Boolean
// null
// undefined
// object

// BigInt
// Symbol 

// String Datatype
let myString = "Hello, World!"; // String
console.log("String:", myString);
console.log(typeof myString);

// Number Datatype
let myNumber = 42; // Number
let otherNumber = 3.14; // Float
console.log("Number:", myNumber, otherNumber);
console.log(typeof myNumber);

// Boolean Datatype
let myBool = false;
let isProgrammer = true;
console.log("Boolean:", myBool, isProgrammer);
console.log(typeof isProgrammer);

// Null Datatype
let a = null;
let c = null; // empty value
console.log("Null:", c);
console.log(typeof c);

// Object Datatype - key-value pairs, seperated by comma and enclosed in curly braces
let student = {
    name: "Harsh",
    rollno: 2,
    age: 32,
    isHacker: true,
    marks: [100, 90, 100],
    key: "value",
    address: {
        city: "Delhi",
        state: "Delhi"
    },
    text: "two"
};

// syntax to access key values of the object
// object_name.key_name
// object_name["key_name"] 

console.log("Object:", student);
console.log("Student Name:", student.name);
console.log("Roll No.:", student.rollno);
console.log("Age.:", student.age);
// syntax to add new key-value pair to the object
// object_name.key_name = value
student.branch = "CSE";
console.log(typeof student);
console.log(student);


// undefined Datatype
let a1;
let b1 = undefined; // explicitly setting a variable to undefined
console.log("Undefined:", a1);
console.log(typeof a1); // undefined

// BigInt Datatype
let a11 = BigInt(1000000000000000000000082827666636633);
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
console.log("BigInt:", bigIntValue, a11);
console.log(typeof bigIntValue); // bigint


// Symbol Datatype
let mySymbol = Symbol(11); // Symbol
console.log("Symbol:", mySymbol);
console.log(typeof mySymbol); // symbol

// Array
let marks = [100, 90, 80, 70, 60, "Harsh", true, [10, 20], {a: "a", b: 2}]; // Array
console.log("Array:", marks);   
console.log(typeof marks); 
console.log("First Element:", marks[0]); // Accessing first element
console.log("Second Element:", marks[1]); // Accessing second element   
console.log("Third Element:", marks[2]); // Accessing third element
