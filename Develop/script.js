// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(text)
{
  var passwordText = document.querySelector("#password");

  passwordText.value = text;

}

//2. need to make arrays(buckets) for each category (this goes before function generatePassword())
var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var specialChar = " !\"#$%&'()*+\\,-./:;<>=?@[]|_^`{}~"
var uppercase = lowercase.toUpperCase()


// Add event listener to generate button
generateBtn.addEventListener("click", startButton);

//this is the function that connects it to the generateBtn line above
//it links all the things below to make sure the whole process is linked to the button and therefore is done as many times as the user wants
function startButton()
{
  var askPassLength = prompt("How long do you want the password to be? ", "Please enter a number between 8 and 128")

  //setting the min and max possibilities for the function
  while (askPassLength < 8 || askPassLength > 128)
  {
    askPassLength = prompt("How long do you want the password to be? ", "Please enter a number between 8 and 128")
  }

  //setting the rest of the prompt categories
  var addLowercase = confirm("Would you like to include lowercase characters? ")
  var addUppercase = confirm("Would you like to include uppercase characters? ")
  var addSpecialChar = confirm("Would you like to include special characters? ")
  var addNumbers = confirm("Would you like to include numbers? ")

  //created a place to consolidate user preferences and also for the final password
  var userPreference = ""
  var finalPassword = ""

  //adds the preference to the user preference array
  // the second += line states that the first part of the array will immediately add one random of each preference
  // this ensures that the generated password will have at least one of each category
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

  //this sets up the random generator for each category
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

  //this makes the final password
  // i starts at finalPassword.length to ensure that it matches the user's desired password length
  //the var result sets the parameter to askPassLength, so that we know the parameter is what the user's input ends up being
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
  var result = makePassword(askPassLength)
  console.log(result)
  writePassword(result)
}