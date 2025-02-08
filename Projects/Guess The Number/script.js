const compChoice = Math.floor(Math.random() * 100 + 1);
let attempts = 1;
let play = true;
let won = false;
let prvGuess = [];
let guess;

const btn = document.getElementById("submit");
const up_down = document.querySelector(".up-down");
console.log(compChoice);
const play_again = document.querySelector(".play-again");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (play) {
    guess = parseInt(document.getElementById("number").value);
    if (checkGuess(guess)) {
      attempts++;
      if (attempts > 10) {
        displayResult(false);
        return;
      }
      validateGuess(guess);
      prvGuess.push(guess);
      document.querySelector(".prvguess").textContent = prvGuess;
      document.querySelector(".guessrmn").textContent = 11 - attempts;
    }
    document.getElementById("number").value = "";
  }
});

function checkGuess(guess) {
  if (guess == "" || isNaN(guess)) {
    up_down.innerHTML = `Enter the correct Value ${guess}`;
    return false;
  } else if (guess < 1) {
    up_down.innerHTML = `Enter value greater than 1`;
    return false;
  } else if (guess > 100) {
    up_down.innerHTML = `Enter value less than 100`;
    return false;
  } else {
    return true;
  }
}
function validateGuess(guess) {
  if (guess === compChoice) {
    won = true;
    displayResult(won);
  } else {
    displayUpDown(guess);
  }
}
function displayUpDown(guess) {
  if (guess < compChoice) {
    up_down.innerHTML = `${guess} is TOO LOW`;
  } else {
    up_down.innerHTML = `${guess} is TOO HIGH`;
  }
}

function displayResult(won) {
  if (won) {
    up_down.innerHTML = "Congratulation You Won !!!";
    play = false;
    play_again.innerHTML = '<button id = "play">Play Again</button>';
  } else {
    up_down.innerHTML = `Better Luck Next Time ! Actual value was ${compChoice}`;
    play = false;
    play_again.innerHTML = '<button id = "play">Play Again</button>';
  }
  play_again.children[0].addEventListener("click", (e) => {
    window.location.reload();
  });
}
