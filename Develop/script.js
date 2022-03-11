// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//2. need to make arrays(buckets) for each category (this goes before function generatePassword())
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "\\", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "_", "^", "`", "{", "}", "~"]
var uppercaseLetters = letters.uppercaseLetters;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//getting the user's preferences
var askPassLength = prompt("How long do you want the password to be? ")


var addLowercase = confirm("Would you like to include lowercase characters? ")
var addUppercase = confirm("Would you like to include uppercase characters? ")
var addSpecialChar = confirm("Would you like to include special characters? ")
var addNumbers = prompt("Would you like to include numbers? ")

//how do i consolidate the user's preferences?
let passwordLength = number(askPassLength);