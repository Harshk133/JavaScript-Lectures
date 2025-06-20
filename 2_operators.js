let a, b;
a = 10; 
b = 20;

// 2. Arithmetic Operators
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus
console.log("Exponentiation:", a ** b); // Exponentiation

// 1. Assignment Operators
a += 5; // a = a + 5
a -= 3; // a = a - 3
b *= 2; // b = b * 2
b /= 4; // b = b / 4
b %= 3; // b = b % 3

// 3. Comparison Operators
console.log("Is a equal to b?", a == b); // Equality
console.log("Is a not equal to b?", a != b); // Inequality
console.log("Is a greater than b?", a > b); // Greater than
console.log("Is a less than b?", a < b); // Less than
console.log("Is a greater than or equal to b?", a >= b); // Greater than or equal to
console.log("Is a less than or equal to b?", a <= b); // Less than or equal to

// 4. Logical Operators
console.log("Logical AND:", (a > 5) && (b < 10)); // Logical AND
console.log("Logical OR:", (a > 5) || (b < 10)); // Logical OR
console.log("Logical NOT:", !(a > 5)); // Logical NOT

// 5. Bitwise Operators
console.log("Bitwise AND:", a & b); // Bitwise AND
console.log("Bitwise OR:", a | b); // Bitwise OR
console.log("Bitwise XOR:", a ^ b); // Bitwise XOR  
console.log("Bitwise NOT:", ~a); // Bitwise NOT
console.log("Left Shift:", a << 2); // Left Shift
console.log("Right Shift:", a >> 2); // Right Shift

// 6. Ternary Operator
// syntax of ternary operator: condition ? expr1 : expr2
let max = (10 < 20) ? 10 : 20; // Ternary Operator
console.log("max:", max); // prints the maximum value