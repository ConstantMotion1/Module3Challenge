// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialcharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\ ";
let passpool = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that runs when 'generate' is clicked
function generatePassword () {
  let password = "";
  let length = prompt ("Please choose password criteria: character length", "8 - 128");
  if (8 < length && length < 128 ) {
    let type1 = window.confirm ("would you like to add lowercase?");
    let type2 = window.confirm ("would you like to add uppercase?");
    let type3 = window.confirm ("would you like to add numbers?");
    let type4 = window.confirm ("would you like to add special characters?");

    if (type1 === true) {
       passpool = passpool + lowercase};

   if (type2 === true) {
        passpool = passpool + uppercase};

   if (type3 === true) {
        passpool = passpool + numeric};

   if (type4 === true) {
      passpool = passpool + specialcharacters};

    //loops generatePassword function to allow the length that the user chooses 
    for (var i = 0; i < length; i++) {
        
    password = password + passpool.charAt(Math.floor(Math.random() * passpool.length))
    
  };

    return password;

  } else {
    window.alert ("Please choose correct length criteria");
  };

};





  
