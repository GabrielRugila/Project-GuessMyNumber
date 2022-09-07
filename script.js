'use strict';

let difficulty = Number(document.querySelector('.difficulty').value);
let correctNumber = Math.trunc(Math.random() * difficulty) + 1;

// Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Scoreboard
let currentScore = difficulty;
document.querySelector('.score').textContent = difficulty;

let highscore = 0;

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

// Restart
document.querySelector('.again').addEventListener('click', function () {
  difficulty = Number(document.querySelector('.difficulty').value);
  correctNumber = Math.trunc(Math.random() * difficulty) + 1;
  currentScore = difficulty;
  document.querySelector('.score').textContent = difficulty;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});

// Number Generator
document
  .querySelector('.selectDifficulty')
  .addEventListener('click', function () {
    difficulty = Number(document.querySelector('.difficulty').value);
    correctNumber = Math.trunc(Math.random() * difficulty) + 1;
    currentScore = difficulty;
    document.querySelector('.score').textContent = difficulty;
    document.querySelector('body').style.backgroundImage = "url('bg.svg')";
    document.querySelector('.message').textContent = 'Start guessing...';
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
    document.querySelector('body').style.backgroundImage =
      "url('bgCorrect.svg')";
    if (currentScore > highscore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  } else if (guess !== correctNumber) {
    document.querySelector('body').style.backgroundImage = "url('bgWrong.svg')";
    if (currentScore > 1) {
      loseScore();
      if (guess > correctNumber) {
        displayMessage('Sorry, wrong number! Try a smaller number');
      } else if (guess < correctNumber) {
        displayMessage('Sorry, wrong number! Try a bigger number');
      }
    } else {
      displayMessage('Sorry, out of points! You Lose');
    }
  }
});
