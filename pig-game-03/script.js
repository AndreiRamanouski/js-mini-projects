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

//players
let firstPlayer = document.querySelector('.player--0');
let secondPlayer = document.querySelector('.player--1');
let firstPlayerName = document.getElementById('name--0');
let secondPlayerName = document.getElementById('name--1');

//scores ids
let firstPlayerOverallScore = document.getElementById('score--0');
let secondPlayerOverallScore = document.getElementById('score--1');
let firstPlayerLocalScore = document.getElementById('current--0');
let secondPlayerLocalScore = document.getElementById('current--1');
//scores actual
let firstPlayerOverallScoreAct = 0;
let secondPlayerOverallScoreAct = 99;
let firstPlayerLocalScoreAct = 0;
let secondPlayerLocalScoreAct = 0;

//dice
let diceImage = document.querySelector('.dice');

//background
let activePlayer = '0';
let pressCountBeforeSwitch = Math.round(Math.random() * 5);

function getNewCount() {
  return Math.floor(Math.random() * 5) + 1;
}

function handleRoll() {
  console.log('roll the dice');
  const rolledDice = getNewCount();
  console.log('actual player now is ' + activePlayer);
  if (activePlayer === '0') {
    console.log('0');
    firstPlayerLocalScoreAct += rolledDice;
    firstPlayerLocalScore.textContent = firstPlayerLocalScoreAct;
  } else {
    console.log('1');
    secondPlayerLocalScoreAct += rolledDice;
    secondPlayerLocalScore.textContent = secondPlayerLocalScoreAct;
  }

  if (pressCountBeforeSwitch-- <= 0) {
    switchPlayersWithoutSave();
  }

  chandeDiceImage(rolledDice);
}
function switchPlayersWithoutSave() {
  if (activePlayer === '0') {
    firstPlayerLocalScoreAct = 0;
    firstPlayerLocalScore.textContent = firstPlayerLocalScoreAct;
    firstPlayer.classList.remove('player--active');
    secondPlayer.classList.add('player--active');
  } else {
    secondPlayerLocalScoreAct = 0;
    secondPlayerLocalScore.textContent = secondPlayerLocalScoreAct;
    secondPlayer.classList.remove('player--active');
    firstPlayer.classList.add('player--active');
  }
  pressCountBeforeSwitch = getNewCount();
  activePlayer = activePlayer === '0' ? '1' : '0';
  console.log(`switch player to ${activePlayer}`);
}

function handleHold() {
  console.log('hold the score');
  if (activePlayer === '0') {
    firstPlayerOverallScoreAct += firstPlayerLocalScoreAct;
    firstPlayerOverallScore.textContent = firstPlayerOverallScoreAct;
    firstPlayerLocalScoreAct = 0;
    firstPlayerLocalScore.textContent = firstPlayerLocalScoreAct;
  } else {
    secondPlayerOverallScoreAct += secondPlayerLocalScoreAct;
    secondPlayerOverallScore.textContent = secondPlayerOverallScoreAct;
    secondPlayerLocalScoreAct = 0;
    secondPlayerLocalScore.textContent = secondPlayerLocalScoreAct;
  }
  if (firstPlayerOverallScoreAct >= 100) {
    firstPlayer.textContent = 'You won the game';
  } else if (secondPlayerOverallScoreAct >= 100) {
    secondPlayer.textContent = 'You won the game';
  }
}

function handleNewGame() {
  console.log('new game');

  firstPlayerOverallScoreAct = 0;
  secondPlayerOverallScoreAct = 0;
  firstPlayerLocalScoreAct = 0;
  secondPlayerLocalScoreAct = 0;

  firstPlayerOverallScore.textContent = firstPlayerOverallScoreAct;
  secondPlayerOverallScore.textContent = secondPlayerOverallScoreAct;
  firstPlayerLocalScore.textContent = firstPlayerLocalScoreAct;
  secondPlayerLocalScore.textContent = secondPlayerLocalScoreAct;
  activePlayer = '0';
  pressCountBeforeSwitch = getNewCount();
}

function chandeDiceImage(number) {
  let imageUrl;
  switch (number) {
    case 1: {
      imageUrl = 'dice-1.png';
      break;
    }
    case 2: {
      imageUrl = 'dice-2.png';
      break;
    }
    case 3: {
      imageUrl = 'dice-3.png';
      break;
    }
    case 4: {
      imageUrl = 'dice-4.png';
      break;
    }
    case 5: {
      imageUrl = 'dice-5.png';
      break;
    }
    case 6: {
      imageUrl = 'dice-6.png';
      break;
    }
  }
  diceImage.setAttribute('src', imageUrl);
}
