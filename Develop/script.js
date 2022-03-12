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
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "\\", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "_", "^", "`", "{", "}", "~"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//getting the user's preferences
var askPassLength = prompt("How long do you want the password to be? ")


var addLowercase = confirm("Would you like to include lowercase characters? ")
var addUppercase = confirm("Would you like to include uppercase characters? ")
var addSpecialChar = confirm("Would you like to include special characters? ")
var addNumbers = confirm("Would you like to include numbers? ")

//how do i consolidate the user's preferences?
var passLength = 10

var userPreference = []

var finalPassword = []

if (addLowercase)
{
  userPreference += lowercase
  finalPassword += getRandomLowercase()
}

if (addUppercase)
{
  userPreference += uppercase
  finalPassword += getRandomUppercase()
}

if (addSpecialChar)
{
  userPreference += specialChar
  finalPassword += getRandomChar()
}

if (addNumbers)
{
  userPreference += numbers
  finalPassword += getRandomNumber()
}

console.log(userPreference)

//how do i get a random variable from each array?
function getRandomNumber()
{
  var randNumIndex = Math.floor(numbers.length * Math.random())
  var randNumValue = numbers[randNumIndex]
  return randNumValue
}

function getRandomLowercase()
{
  var randLowerIndex = Math.floor(lowercase.length * Math.random())
  var randLowerValue = lowercase[randLowerIndex]
  return randLowerValue
}

function getRandomUppercase()
{
  var randUpperIndex = Math.floor(uppercase.length * Math.random())
  var randUpperValue = uppercase[randUpperIndex]
  return randUpperValue
}

function getRandomChar()
{
  var randCharIndex = Math.floor(specialChar.length * Math.random())
  var randCharValue = specialChar[randCharIndex]
  return randCharValue
}

//how do i consolidate those into one array
function makePassword(passLength)
{
  var index = 0;
  for (i = finalPassword.length; i < passLength; i++)
  {
    index = Math.floor(userPreference.length * Math.random())
    finalPassword += userPreference[index]
  }
  return finalPassword
}
console.log(makePassword(10))

