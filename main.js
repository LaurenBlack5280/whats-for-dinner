/* QUERYSELECTORS */
var radioButtons = document.querySelectorAll('input[name="food-choice"]')
// var sideButton = document.querySelector('#side')
// var mainButton = document.querySelector('#main')
// var dessertButton = document.querySelector('#dessert')
var submitButton = document.querySelector('#button')
//var cardTwo = document.querySelector('#card-two')
var cookpot = document.querySelector('.cookpot')
var paragraph = document.querySelector('.paragraph')

/*  DATA */

var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas,'
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
]

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'
]

/* EVENTLISTENERS */
submitButton.addEventListener('click', )

/* EVENTHANDLERS */

    /*  FIND USER INPUT */
function findCheckedOption() {
  for(var i = 0; i < radioButtons.length; i ++) {
    if (radioButtons[i].checked) {
      radioButtons[i].checked = radioButtons[i].value
      var checkedOption = radioButtons[i].value
    }
  }
}
    /* CHANGE OUTPUT */
// on click, change display
// - hide cookpot: change image class to remove hidden(innertext/html)

function hideCookpot() {
cookpot.classList.add(hidden)
}

function unhideArticle() {
paragraph.classList.remove(hidden)
}

var randomOption = array[Math.floor(Math.random() * array.length)];


function displayChoice() {
for(var i = 0; i < sides.length; i ++) {
  if(side.checked) {
    sides[i]getrandomindexfunction = sides[i].value
    var selectedSide = sides[i].value
    paragraph.innertext = `${selectedSide}`
  }
}
}
// - display meal option: change div class to add hidden to innerHTML/innertext
//                        change id to match item on list of chosen options
//                        create array of options -iterate over array at random
//                        interpolate values from list
