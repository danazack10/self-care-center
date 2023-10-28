// VARIABLES
//====================================================================
var receiveButton = document.querySelector('.receivebutton')
var img = document.querySelector('.svg')
var msgCont = document.querySelector('.messagecontainer')
var affirmRadio = document.querySelector('#affirmation')
var mantraRadio = document.querySelector('#mantra')


// EVENT LISTENERS
//====================================================================
receiveButton.addEventListener('click', displayMessage)


//EVENT HANDLERS
//====================================================================
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function randomAffirm() {
  return affirmations[getRandomIndex(affirmations)]
}

function randomMantra() {
    return mantras[getRandomIndex(mantras)]
}

function displayMessage(){
  img.style.display = "none";
  var affirm = randomAffirm();
  var mantra = randomMantra();
  if (affirmRadio.checked) {
    msgCont.innerText = `${affirm}`;
    event.preventDefault();
  } else if (mantraRadio.checked) {
    msgCont.innerText = `${mantra}`;
    event.preventDefault();
  }
}


//====================================================================


// CHOSEN TASK: User can delete a message
// --> Add the ability to delete a messge (ie: when a message shows up, 
// show a button that says “I don’t like this messge” (or something similar), 
// and remove it from the list so that it will not show up any more. Make sure
// to alert the user in some way that the message has been removed.
// --> NOTE: None of this needs to persist on page refresh, unless you also
// complete the local storage feature.

