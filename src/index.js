import './index.html'
import './styles/screen.sass'

// click function to indicate x's and o's
const main = () => {
  document.querySelector('button').addEventListener('click', reset)
  let player = 'X'
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      if (cells[i].textContent === '') {
        cells[i].textContent = player
        if (player === 'X') {
          player = 'O'
        } else {
          player = 'X'
        }
      }
    })
  }
}

// display result in score board

// HINT: Try calling `gameOver(true)` in the console.
// const gameOver = (playerDidWin) => {
//   if (playerDidWin) {
//     $('.dialog h3').textContent = 'You won!'
//   } else {
//     $('.dialog h3').textContent = 'You lost!'
//   }
//   $('body').className = 'modal'
//   $('.scores .player').textContent = 0
//   $('.scores .computer').textContent = 0
// }

// reset board
const reset = () => {
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
