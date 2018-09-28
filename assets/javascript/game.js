// psychic word guess
console.log("javascript")
//create an array for the letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


//reset the stats
var gameScore = 0;
var losses = 0;
var wins = 0;
var guesses = 10;
var computerGuess = letters[Math.floor(letters.length * Math.random())];

console.log("computers Guess:" + computerGuess)


//print letter typed
var guessesLeftHTML = document.getElementById("guesses");
guessesLeftHTML.textContent = "Guesses Left:" + guesses;
// document.write(guessesLeft);

//variables to hold html elements/the text that stays on the screen
var displayHTML = document.getElementById("display");


//reset the game
function resetGame() {
  console.log("resetGame")
  gameScore = 0;
  losses = 0;
  wins = 0;
  guesses = 10;
  computerGuess = letters[Math.floor(letters.length * Math.random())];
  guessesLeftHTML.textContent = "Guesses Left:" + guesses;
  console.log("computers Guess:" + computerGuess)
};

//what is going to happen onkeyup
document.onkeyup = function (event) {

  //get the value of the key that's pressed
  var keyPressed = event.key;
  console.log(keyPressed)

  // variable statements
  //check if incorrect
  if (keyPressed !== computerGuess) {

    guesses--;
    console.log(guesses)
    guessesLeftHTML.textContent = "Guesses Left:" + guesses;

    //check if we have guesses left
    if (guesses === 0) {

      losses++;

      console.log(losses)
      document.getElementById("loss").innerHTML = "Losses: " + losses;
      resetGame();

    };
  }

  if (keyPressed === computerGuess) {

    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    resetGame()
  }




  //stop everything from running at game over
  //return false;
}