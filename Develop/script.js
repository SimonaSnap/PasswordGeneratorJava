// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//how do i set the passwordLength? 8-128
//how do i set the need for lowercase?
//how do i set the need for uppercase?
//how do i set the need for numbers?
//how do i set the need for special characters?
//how do i make sure at least one of each group is selected?


var passwordLength = 5;
var pattern_list = "0123456789"
var password = ''

function makePassword(passwordLength)
{
  password = " "
  for (i = 0; i < passwordLength; i++)
  {
    password += pattern_list.charAt(Math.floor(Math.random() * pattern_list.length))
    return password;
  }
}

makePassword();
