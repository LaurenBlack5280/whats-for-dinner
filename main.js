/* QUERYSELECTORS */
var radioButtons = document.querySelectorAll('input[name="food-choice"]')
// var sideButton = document.querySelector('#side')
// var mainButton = document.querySelector('#main')
// var dessertButton = document.querySelector('#dessert')
var submitButton = document.querySelector('#button')
//var cardTwo = document.querySelector('#card-two')
//var cookpot = document.querySelector(".cookpot")



/* EVENTLISTENERS */
submitButton.addEventListener('click', )


/* EVENTHANDLERS */

    /*  FIND USER INPUT */
function findCheckedOption() {
  for(var i = 0; i < radioButtons.length; i ++) {
  //if value of button input is checked,
  if (radioButtons[i].checked) {
    radioButtons[i].checked = radioButtons[i].value
    var checkedOption = radioButtons[i].value
    }
  }
}
    /* CHANGE OUTPUT */
// on click, change display
// - hide cookpot: change class to hidden
// and or change image src
// - display meal option: change innerHTML
