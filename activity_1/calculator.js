// run at https://www.programiz.com/javascript/online-compiler/

console.log("-------- MENU ----------");
console.log("1 - Addition")
console.log("2 - Subtraction")
console.log("3 - Multiplication")
console.log("4 - Division\n")

// prompt the user to choose an option
const choice = prompt("Choose an option: ")

// handle invalid input
if (choice != "1" && choice != "2" && choice != "3" && choice != "4"){
    console.log("Invalid input")
    // exit
    process.exit(1)
}

// prompt the user to enter two numbers
const num1 = prompt("\nEnter a number: ")
const num2 = prompt("Enter another number: ")

let result;
// handle calculations based on the user's choice
if (choice == "1"){
    // add
    result = Number(num1) + Number(num2)
}
else if (choice == "2"){
    // subtract
    result = Number(num1) - Number(num2)
}
else if (choice == "3"){
    // multiply
    result = Number(num1) * Number(num2)
}
else if (choice == "4"){
    // divide
    result = Number(num1) / Number(num2)
}

// display the result
console.log("\nResult =", result)
