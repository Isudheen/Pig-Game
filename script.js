'use strict';

//Element selection
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initital conditions
score1El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [4, 5];
let currentScore = 0;
let activePlayer = 0;

// To Roll Dice
btnRoll.addEventListener('click', () => {
  //1.Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled stat: if true switch to next player

  if (scores[0] < 100 && scores[1] < 100) {
    if (!activePlayer) {
      if (dice !== 1) {
        currentScore += dice;
        current0El.textContent = currentScore;
      } else {
        scores[0] += currentScore;
        score0El.textContent = scores[0];
        currentScore = 0;
        current0El.textContent = 0;
        activePlayer = 1;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
      }
    } else {
      if (dice !== 1) {
        currentScore += dice;
        current1El.textContent = currentScore;
      } else {
        scores[1] += currentScore;
        score1El.textContent = scores[1];
        currentScore = 0;
        current1El.textContent = 0;
        activePlayer = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
      }
    }
  } else {
    if (score0El.textContent >= 100) {
      console.log(`Player 1 wins`);
    } else console.log(`Player 2 wins`);
  }
});
