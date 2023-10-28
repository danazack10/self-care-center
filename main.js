// VARIABLES
var rcvButton = document.querySelector('.receivebutton');
var img = document.querySelector('.svg');
var msgCont = document.querySelector('.messagecontainer');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var rmvButton = document.querySelector('#removebutton');


// EVENT LISTENERS
rcvButton.addEventListener('click', displayMessage);
rmvButton.addEventListener('click', removeMessage);


// FUNCTIONS
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function randomAffirm() {
  return affirmations[getRandomIndex(affirmations)];
}

function randomMantra() {
  return mantras[getRandomIndex(mantras)];
}

function displayMessage() {
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

function removeMessage() {
  event.preventDefault();
  if (affirmRadio.checked && img.style.display === "none") {
    for (var i = 0; i < affirmations.length; i++) {
      if (affirmations[i] === msgCont.innerText) {
        affirmations.splice(i, 1);
        msgCont.innerText = `Affirmation has been removed!`;
      } 
    }
  } else if (mantraRadio.checked && img.style.display === "none") {
    for (var i = 0; i < mantras.length; i++) {
      if (mantras[i] === msgCont.innerText) {
        mantras.splice(i, 1);
        msgCont.innerText = `Mantra has been removed!`;
      }  
    }
  }
}
  
