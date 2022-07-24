/* QUERYSELECTORS */
var sideButton = document.querySelector('#side')
var mainButton = document.querySelector('#main')
var dessertButton = document.querySelector('#dessert')
var submitButton = document.querySelector('#button')
var mainView = document.querySelector('.main-view')
var cookpot = document.querySelector('.cookpot')
var option = document.querySelector('.option')
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
'Empanadas',
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
submitButton.addEventListener('click', displayChoice)

/* EVENTHANDLERS */
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideCookpot() {
  mainView.classList.add('hidden')
}

function unhideSection() {
  option.classList.remove('hidden')
}

function displayChoice() {
  event.preventDefault()
  hideCookpot()
  unhideSection()
      if(sideButton.checked) {
        paragraph.innerText = sides[getRandomIndex(sides)]
      }
      if(mainButton.checked) {
          paragraph.innerText = mains[getRandomIndex(mains)]
      }
      if(dessertButton.checked) {
          paragraph.innerText = desserts[getRandomIndex(desserts)]
    }
}
