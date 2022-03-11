// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}



//how do i set the passwordLength? 8-128
//how do i set the need for lowercase?
//how do i set the need for uppercase?
//how do i set the need for numbers?
//how do i set the need for special characters?
//how do i make sure at least one of each group is selected?


var pattern_list = "0123456789"
var password = ''

function makePassword(passwordLength)
{
  var newPasssword = ""
  var index = 0;
  for (i = 0; i < passwordLength; i++)
  {
    index = Math.floor(Math.random() * pattern_list.length)
    newPasssword += pattern_list.charAt(index)
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = newPasssword
}

// Add event listener to generate button
generate.addEventListener("click", makePassword(8));



//This is how he suggests starting the homework

//javascript modal/ alert, confirm and prompt
//  the prompt is the best way to get user input
//  leave the assignment code up top - uncommented, code starts below the function generatePassword()

//1. get user preferences
//2. need to make arrays(buckets) for each category (this goes before function generatePassword())
//3. Identify and collect the buckets the user has chosen
// (when the user identifies with arrays to use - create a new array with all the categories? arrays.concat(array)?)
//4. create a guaranteed collection - how to make sure all categories are chosen at least once
//5. create a password variable - starts off as an empty string
// var password = ""; or var password = []; that you then run them off as a single string
//6. randomly draw a character
//7. put that character on the password var (?)
//8. repeat as many times as specified
//9. loop through the guaranteed elements, replace elements in password array
// (math.floor(math.random)) to randomly pick and replace those elements in the array
//10. join characters in password array into string
//11. return the password string