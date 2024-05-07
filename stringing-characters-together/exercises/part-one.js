let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let number = 10000;
let length = number.toString().length;
console.log("The length of the number is", length)
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 123.45
let decimalToString = decimal.toString();
numberLength = decimalToString.replace('.','').length;
console.log("Length of", decimal, "without the period:", numberLength)
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}
