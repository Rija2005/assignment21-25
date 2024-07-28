//ASSIGNMENT
//CHAP21-25
//QUESTION NO1

let firstName = prompt("Please enter your first name:");


let lastName = prompt("Please enter your last name:");


let fullName = firstName + ' ' + lastName;


alert('Hello, ' + fullName + '!');

//QUESTION NO2

// Prompt the user to enter their favorite mobile phone model
let mobilePhoneModel = prompt("Please enter your favorite mobile phone model:");

// Check if the user has entered a value
if (mobilePhoneModel !== null && mobilePhoneModel.trim() !== '') {
    // Find the length of the input
    let lengthOfInput = mobilePhoneModel.length;

    document.write( "My favourite Mobile model is"  +  mobilePhoneModel+ "<br>" + 'The length of your input is: ' + lengthOfInput);
} else {
    
    document.write('You did not enter any input.');
}
//QUESTION NO3

let word = "Pakistani";

let indexOfN = word.indexOf("n");

// Display the result
if (indexOfN !== -1) {
    document.write('The index of the letter "n" in the word "Pakistani" is: ' + indexOfN);
} else {
    document.write('The letter "n" is not found in the word "Pakistani".');
}

//QUESTION NO4

let str = "Hello World";


let lastIndexOfL = str.lastIndexOf("l");


if (lastIndexOfL !== -1) {
    alert('The last index of the letter "l" in the string "Hello World" is: ' + lastIndexOfL);
} else {
    alert('The letter "l" is not found in the string "Hello World".');
}

//QUESTION NO7

let originalString = "Hyderabad";


let updatedString = originalString.replace("Hyder", "Islamabad");


document.write(  "<br>" +  'The updated string is: ' + updatedString);

//QUESTION NO8

var message = "Ali and Sami are best friends. They play cricket and football together.";


var updatedMessage = message.replace("/and/g," +"&");


document.write(  "<br>" +  'The updated message is: ' + updatedMessage);

//QUESTION NO9

let string = "472";

let num = Number(string); 


console.log('Original string value:', string);
console.log('Original string type:', typeof string);


console.log('Converted number value:', num);
console.log('Converted number type:', typeof num);


//QUESTION NO10

let userInput = prompt("Please enter some text:") || '';


let upperCaseInput = userInput.toUpperCase();


alert('Your input in capital letters is: ' + upperCaseInput);


//QUESTION NO11
//QUESTION NO12
// Define the variable num
var nuM = 35.36;


var numStr = nuM.toString();


var numWithoutDot = numStr.replace('.', '');

// Display the result
document.write(   "<br> "+' The number without the dot is: ' + numWithoutDot);


//QUESTION NO15






//QUESTION NO16
// Define the string
var university = "University of Karachi";


var array = university.split(' ');


document.write(   "<br>"+ 'The elements of the array are: \n' + array.join('\n'));

//QUESTION NO18

let message = "The quick brown fox jumps over the lazy dog";


let lowerStr = message.toLowerCase();


let wordToSearch = "the";


let  occurrences = lowerStr.split(wordToSearch).length - 1;

console.log("The number of occurrences of the word " + wordToSearch + " is:"+ occurrences);
