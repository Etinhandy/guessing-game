"use strict";

const modal = document.querySelector(".modal-display");
const btnInstruction = document.querySelector(".instruction");
const number = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let highScoreEl = document.querySelector(".high-score");
const btnAgain = document.querySelector(".again");

const btnChecker = document.querySelector(".checker");
const message = document.querySelector(".message");

//starting variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent = secretNumber;
message.textContent = "hint!";
highScoreEl.textContent = 0;
let score = 20;
let highScore = 0;



//show modal function
btnInstruction.addEventListener("click", function () {
  modal.classList.remove("d-none");
  console.log(modal);
});

// Exit modal
document.querySelector(".modal-exit").addEventListener("click", function () {
  modal.classList.add("d-none");
});

// To reset the game
btnAgain.addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  message .textContent = "hint";
  score = 20;
  scoreEl.textContent = score;
  highScoreEl.textContent = highScore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";

})

// game function
btnChecker.addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  guess = Number(guess);
  console.log(typeof guess, guess)
  if (!guess) {
    message.textContent = "please enter a number"
  }else {
    if (guess === secretNumber) {
      message.textContent = "Correct!";
      number.textContent = secretNumber;
      document.querySelector('.back').classList.remove('bg-danger');
      document.querySelector('.back').classList.add('bg-success');
      if (score > highScore){
        highScore = score
        console.log(highScore, "hellp");
        highScoreEl.textContent = highScore;
      }
    }else if (guess > secretNumber) {
     if (score > 1) {
      message.textContent = "Too high!";
      score--
      scoreEl.textContent = score;
     }
     else {
      message.textContent = "You lost";
        scoreEl.textContent = 0;
     }
    } else {
      if (score > 1) {
        message.textContent = "Too low!";
        score--
        scoreEl.textContent = score;
      }else {
        message.textContent = "You lost";
        scoreEl.textContent = 0;
      }
    }
  }

})