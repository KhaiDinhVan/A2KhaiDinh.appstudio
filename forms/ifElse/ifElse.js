// Get user input for user first name, states (2 letters), and user's temperature in Fahrenheit 

let firstName = prompt("what is your first name?")
let userState = prompt('what is your states (2 letters)?')
let userTemp = Number(prompt('what is the temperature in your state? (Fahrenheit)'))

// store each message in an array, which is a collection of element, in this case is the message that we will output to user
const messages = [];
messages[0] = "wear a warm coat, hat, scarf and gloves.";
messages[1] = "wear a warm coat but you won't need a hat, scarf or gloves.";
messages[2] = "wear your warmest coat, a warm hat, a scarf, and warm gloves.";
messages[3] = "wear a warm coat, hat and gloves. Maybe a scarf too."

// Take input the tempurature and the state from user compare in each case to give the right output
// If the tempurature is less than 32 and the state the user input is NE, then tell user the first message
if (userTemp < 32 && userState == "NE") {
  console.log(`${firstName}, ${messages[0]}`)
}
// If the tempurature is greater than or equal to 32 and less than or equal to 50 and the state input is NE, then tell user the second message
else if (userTemp >= 32 && userTemp <= 50  && userState == "NE") {
  console.log(`${firstName}, ${messages[1]}`)
}
// If the tempurature is greater than or equal to 32 and less than or equal to 50 and the state input is FL, then tell user the third message
else if (userTemp >= 32 && userTemp <= 50  && userState == "FL") {
  console.log(`${firstName}, ${messages[2]}`)
}
// If the tempurature is greater than or equal to 50 and less than or equal to 70 and the state input is FL, then tell user the fourth message
else if (userTemp >= 50 && userTemp <= 70  && userState == "FL") {
  console.log(`${firstName}, ${messages[3]}`)
}
// If none of the case above apply, then tell the user to try again 
else {
  console.log('You should try again')
}

