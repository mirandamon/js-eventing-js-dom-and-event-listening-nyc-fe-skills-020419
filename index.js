// Problem: we want to react to clicks on the <main> tag

const main = document.getElementById('main')


// addEventListener has 2 options,

// 1. is the event that we care about
// 2. is the function that is supposed to run when that event happens

function onClick(event) {
  console.log(event)
}

// document level events: online/offline, global help button/scrolling


function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)
// document.addEventListener('keydown', onKeyDown)

const inputBox = document.getElementById('sup')


function onInputKeyDown(event) {
  // if/else 
  console.log(event)
  if (event.keyCode === 71) {
    event.preventDefault()
  }
}

inputBox.addEventListener('keydown', onInputKeyDown)




const p = document.getElementById('yellow')

// function onYellowClick(event) {
  
// }

// <p style="background-color: yellow">

p.addEventListener('click', (event) => {
  console.log(event)
  // how do we make something yellow?
  p.style.backgroundColor = 'yellow' 
})


// anonymous arrow functions 
// ES6 Javascript (in 2015)


// 1: always find the element first
const button = document.getElementById('plus')

button.addEventListener('click', () => {
  const newP = document.createElement('p')
  // <p>Congratulations!</p>
  newP.innerHTML = 'Congratulations!'
  main.appendChild(newP)
  // <body> <div> </div> <span></span> <p>Congratulations</p> </body>
})


const divs = document.querySelectorAll('div')
// [div1, div2, div3, div4, div5]

for (let div of divs) {
  div.addEventListener('click', (event) => {
    console.log(event)
  })
}

// event bubbling




































