'use strict';

let difficulty = Number(document.querySelector('.difficulty').value);
let correctNumber = Math.trunc(Math.random() * difficulty) + 1;

// Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Scoreboard
let currentScore = difficulty;
let highscore = 0;
document.querySelector('.score').textContent = difficulty;

function loseScore() {
  if (currentScore > 10) {
    currentScore -= Math.floor(
      Number(document.querySelector('.score').textContent) / 10
    );
  } else {
    currentScore -= 1;
  }
  console.log(currentScore);
  document.querySelector('.score').textContent = currentScore;
}

function reset() {
  difficulty = Number(document.querySelector('.difficulty').value);
  correctNumber = Math.trunc(Math.random() * difficulty) + 1;
  currentScore = difficulty;
  document.querySelector('.score').textContent = difficulty;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = "#eb2f5b";
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}

// Restart
document.querySelector('.again').addEventListener('click', function () {
  reset();
});

document
  .querySelector('.selectDifficulty')
  .addEventListener('click', function () {
    reset();
  });

// Guess checker
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ Please enter a valid number for your guess!');
  } else if (guess === correctNumber) {
    displayMessage('Congratulations! You have the correct number!');
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('body').style.backgroundColor =
      "#39ed69";
    if (currentScore > highscore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  } else if (guess !== correctNumber) {
    document.querySelector('body').style.backgroundColor = "#c71616";
    if (currentScore > 1) {
      loseScore();
      document.querySelector('.message').textContent =
        guess > correctNumber
          ? 'Sorry, wrong number! Try a smaller number'
          : 'Sorry, wrong number! Try a bigger number';
    }
  }
});
