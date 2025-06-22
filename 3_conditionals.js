// if
// if else
// if else if
// switch

// let score = 85;
// let score = parseInt(prompt("Enter ur score:")); // Prompt user for input

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }


// console.log("User score:", score); 


// let day = "Wednesday";

let day = prompt("Enter the day of the week:"); // Prompt user for input

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;

  case "Tuesday":
    console.log("Second day of the week.");
    break;

  case "Wednesday":
    console.log("Midweek day.");
    break;

  case "Thursday":
    console.log("Almost the weekend.");
    break;
  case "Friday":
    console.log("Weekend starts tomorrow!");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It’s the weekend!");
    break;

  default:
    console.log("Invalid day!");
}

