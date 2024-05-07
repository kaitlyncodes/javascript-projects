//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
let jS = "javaScript";
let result = jS.charAt(0).toUpperCase() + jS.charAt(4);
console.log(result)
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let lang = "JavaScript";
let abbreviation = lang.substring(0, 4).toUpperCase();
console.log(`The abbreviation for '${lang}' is '${abbreviation}'`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let jsAbv= 'JavaScript' 
let letterJ = jsAbv[0];
let letterS = jsAbv[4];
console.log(`The abbreviation for JavaScript is ${letterJ}${letterS}`)
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let unTitled = 'title case';
console.log(unTitled.replace('t' , 'T').replace('c' , 'C'));

