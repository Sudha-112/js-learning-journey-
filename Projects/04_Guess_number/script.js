let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//check whether the value is between 1 and 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
     prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
     
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

// check if the value is equal to the random number
function checkGuess(guess) {
   if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is toooo low`);
  } else {
    displayMessage(`Number is toooo high`);
  }
}

// clean the previous input and update previous guess and remaining guess values
function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// tells about your guess
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// to end the game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//to start the new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
