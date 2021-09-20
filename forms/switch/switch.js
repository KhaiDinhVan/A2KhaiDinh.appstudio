
// Get input from user
let firstName = prompt("what is your first name?")
let userState = prompt("what is your states (2 letters)?")
let userTemp = Number(prompt("what is the temperature in your state? (Fahrenheit)"))

// Store messages in the array so we could use it later.
//an array, which is a collection of element, in this case is the message that we will output to user
const messages = [];
messages[0] = "wear a warm coat, hat, scarf and gloves.";
messages[1] = "wear a warm coat but you won't need a hat, scarf or gloves.";
messages[2] = "wear your warmest coat, a warm hat, a scarf, and warm gloves.";
messages[3] = "wear a warm coat, hat and gloves. Maybe a scarf too."

// If the user does input, then the code runs for each case of the tempurature and states. 
// If the tempurature is less than 32 and the state the user input is NE, then tell user the first message
switch (true) {
case (userTemp < 32 && userState == "NE"):
  console.log(`${firstName}, ${messages[0]}`)
  break
// If the tempurature is greater than or equal to 32 and less than or equal to 50 and the state input is NE, then tell user the second message
case (userTemp >= 32 && userTemp <= 50  && userState == "NE"):
  console.log(`${firstName}, ${messages[1]}`)
  break
// If the tempurature is greater than or equal to 32 and less than or equal to 50 and the state input is FL, then tell user the third message
case (userTemp >= 32 && userTemp <= 50  && userState == "FL"):
  console.log(`${firstName}, ${messages[2]}`)
  break
// If the tempurature is greater than or equal to 50 and less than or equal to 70 and the state input is FL, then tell user the fourth message
case (userTemp >= 50 && userTemp <= 70  && userState == "FL"):
  console.log(`${firstName}, ${messages[3]}`)
  break
// If none of the case above apply, then tell the user to try again 
default:
  console.log("Please try again.")
}
