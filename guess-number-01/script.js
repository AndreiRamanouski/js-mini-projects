'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let gameFinished = false;
function generateSecretNumber() {
  return Math.round(Math.random() * 20);
}

document.querySelector('.check').addEventListener('click', () => {
  let input = Number(document.querySelector('.guess').value);
  if (!validateInputAndAction(input)) return;
  if (input === secretNumber) {
    handleSuccessfullGuess();
  } else {
    handleUnsucessfullGuess(input);
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
  console.log('Player selects again!');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';

  setSecretNumber();
});

function setSecretNumber() {
  secretNumber = generateSecretNumber();
  document.querySelector('.number').textContent = secretNumber;
}

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}

function validateInputAndAction(input) {
  if (gameFinished) {
    setMessage('Game finished. Start again');
    return false;
  }
  if (score <= 0) {
    setMessage('You lost. Play again');
    return false;
  }
  if (!input) {
    setMessage('No number 🥲');
    return false;
  }
  
  if (input < 1 || input > 20) {
    setMessage('The guess should be between 0 and 20');
    return false;
  }
  return true;
}

function handleSuccessfullGuess() {
  document.querySelector('body').style.backgroundColor = 'green';
  const newHighScore = document.querySelector('.score').textContent;
  document.querySelector('.highscore').textContent = newHighScore;
  score = 20;
  setMessage('Congratulations. You guessed the number');
  document.querySelector('.number').textContent = secretNumber;
  gameFinished = true;
}

function handleUnsucessfullGuess(input) {
  if (input < secretNumber) {
    setMessage('Guess bigger');
  } else {
    setMessage('Guess smaller');
  }
  score--;
  if (score === 0) {
    document.querySelector('body').style.backgroundColor = 'red';
    setMessage('You lost. Play again');
  }
}
