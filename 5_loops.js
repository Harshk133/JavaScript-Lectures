// Loops in JavaScript
// 1. while
// 2. do while
// 3. for
// 4. for in
// 5. for of

console.log("Loops in JavaScript");
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// while loop is also called as entry controlled loop
// let i = 100;
// while(i >= 0){
//     console.log(i);
//     i--; // decrement i by 1
// }

// do while loop is also called as exit controlled loop
// let i = 1;
// do {
//     console.log(i);
//     i++; // increment i by 1
// }while (i <= 10);

// let user_name;
// do{
//     user_name = prompt("Enter Your Name:");
// }while(!user_name);
// console.log("Hello, " + user_name + "!");


// Iterating object through for loop
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

// for in loop ----------> object 
// for(let key in student){
    //     console.log(key, "-->", student[key]);
    // }
    
let marks = [100, 90, 80, 70, 60, "Harsh", true, [10, 20], {a: "a", b: 2}]; // Array
    
    
// for of loop ----------> array
for(let value of marks){
    console.log(value);
} 


