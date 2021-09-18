// Get user input for user first name, states (2 letters), user's temperature in Fahrenheit 

let firstName = prompt("what is your first name?")
let userState = prompt('what is your states (2 letters)?')
let userTemp = Number(prompt('what is the temperature in your state? (Fahrenheit)'))

// store the message in 
const messages = [];
messages[0] = "Wear a warm coat, hat, scarf and gloves.";
messages[1] = "Wear a warm coat but you won't need a hat, scarf or gloves.";
messages[2] = "Wear your warmest coat, a warm hat, a scarf, and warm gloves.";
messages[3] = "Wear a warm coat, hat and gloves. Maybe a scarf too."

if (userTemp < 32 && userState == "NE") {
  console.log(messages[0])
}
else if (userTemp >= 32 && userTemp <= 50  && userState == "NE") {
  console.log(messages[1])
}
else if (userTemp >= 32 && userTemp <= 50  && userState == "FL") {
  console.log(messages[2])
}
else if (userTemp >= 50 && userTemp <= 70  && userState == "FL") {
  console.log(messages[3])
}
else {
  console.log('You should try again')
}

