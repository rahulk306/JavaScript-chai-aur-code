let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGess = 1;

let playGame = true;

if(playGame)
{
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    });
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number greater than 1');
    } else if(guess > 100){
        alert('Please enter a number less than 100');
    } else{
        prevGuess.push(guess);
        if(numGess === 11){
            displayGuess(guess)
            displayMessage(`Game Over !! Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is tooo loww !!`)
    } else if(guess > randomNumber){
        displayMessage(`Number is tooo high !!`)
    }
}

function displayGuess(guess)
{
    userInput = '' // user input ko empty kr denge
    guessSlot.innerHTML += `${guess}  `
    numGess++;
    remaining.innerHTML = `${11 - numGess}`;
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
}
