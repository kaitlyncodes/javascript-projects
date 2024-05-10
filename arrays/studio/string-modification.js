const prompt = require("prompt-sync")({sigint:true});
const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let removeThree = str.substring(0, 3);
let newString = str.substring(3) + removeThree;
console.log(newString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} in piglatin looks like ${newString}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let enterNum = ("Enter the number of letters that will be relocated:");
let rightAns = 3;


let canAns = prompt(enterNum)


if (parseInt(canAns) === rightAns) {
    console.log("correct!"); 
} else {
    console.log("Nope! Try again");
}




//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
