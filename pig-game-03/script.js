'use strict';

document.querySelectorAll('.player');

//buttons
const handleRollListener = function () {
  handleRoll();
};
const handleHoldListener = function () {
  handleHold();
};
const handleNewGameListener = function () {
  handleNewGame();
};
document
  .querySelector('.btn--roll')
  .addEventListener('click', handleRollListener);
document
  .querySelector('.btn--hold')
  .addEventListener('click', handleHoldListener);
document
  .querySelector('.btn--new')
  .addEventListener('click', handleNewGameListener);

//scores ids
let firstPlayerOverallScore = document.getElementById('score--0');
let secondPlayerOverallScore = document.getElementById('score--1');

let overallScores = [0, 0];
//scores actual
let localScoreAct = 0;

//background
let activePlayer = 0;
let pressCountBeforeSwitch = Math.round(Math.random() * 5);

function getNewCount() {
  return Math.floor(Math.random() * 5) + 1;
}

function handleRoll() {
  console.log('roll the dice');
  if (pressCountBeforeSwitch-- <= 0) {
    switchPlayersWithoutSave();
  }
  const rolledDice = getNewCount();
  console.log('actual player now is ' + activePlayer);
  localScoreAct += rolledDice;
  document.getElementById(`current--${activePlayer}`).textContent =
    localScoreAct;

  chandeDiceImage(rolledDice);
}
function switchPlayersWithoutSave() {
  localScoreAct = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    localScoreAct;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  pressCountBeforeSwitch = getNewCount();
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  console.log(`switch player to ${activePlayer}`);
}

function handleHold() {
  console.log('hold the score');
  overallScores[activePlayer] += localScoreAct;
  document.getElementById(`score--${activePlayer}`).textContent =
    overallScores[activePlayer];
  localScoreAct = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    localScoreAct;

  if (overallScores[activePlayer] >= 100) {
    document.getElementById(`name--${activePlayer}`).textContent =
      'You won!!🎇';
  }
}

function handleNewGame() {
  console.log('new game');
  localScoreAct = 0;
  firstPlayerOverallScore.textContent = 0;
  secondPlayerOverallScore.textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    localScoreAct;
  activePlayer = 0;
  pressCountBeforeSwitch = getNewCount();
}

function chandeDiceImage(number) {
  document.querySelector('.dice').setAttribute('src', `dice-${number}.png`);
}
