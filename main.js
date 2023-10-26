// VARIABLES
//====================================================================
var button = document.querySelector(button)


// EVENT LISTENERS
//====================================================================
button.addEventListener('click', displayMessage)


//EVENT HANDLERS
//====================================================================
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

//Write a function to display random mantra & random affirmation
//Use conditional
// --> if affirmation selected, then return random from the affirmation array
// --> if mantra selected, then return random from the mantra array
// Put return message in place of the svg icon (use "hidden")
function displayMessage(){

}

// Write hidden/show helper functions?



//====================================================================


// CHOSEN TASK: User can delete a message
// --> Add the ability to delete a messge (ie: when a message shows up, 
// show a button that says “I don’t like this messge” (or something similar), 
// and remove it from the list so that it will not show up any more. Make sure
// to alert the user in some way that the message has been removed.
// --> NOTE: None of this needs to persist on page refresh, unless you also
// complete the local storage feature.

