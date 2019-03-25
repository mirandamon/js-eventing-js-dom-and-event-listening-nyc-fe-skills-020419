// Problem: we want to react to clicks on the <main> tag

const main = document.getElementById('main')


// addEventListener has 2 options,

// 1. is the event that we care about
// 2. is the function that is supposed to run when that event happens

function onClick() {
  console.log('hey the click happened')
}

// document level events: online/offline, global help button/scrolling


main.addEventListener('copy', onClick)

document.addEventListener('click', onClick)