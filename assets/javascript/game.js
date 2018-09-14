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

console.log("computers Guess:"+computerGuess)


//print letter typed


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
  console.log("computers Guess:"+computerGuess)
}

//print the score to the page

//what is going to happen onkeyup
document.onkeyup = function (event) {

  //get the value of the key that's pressed
  var keyPressed = event.key;
  console.log(keyPressed)
  // variable statements
  if (keyPressed !== computerGuess) {

    losses++;

    console.log(losses)
    document.getElementById("loss").innerHTML = "Losses: " + losses;

    guesses--;
    console.log(guesses)
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
  }

  if (keyPressed === computerGuess) {

    wins++;
    guesses--
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    resetGame()
  }

  if (guesses === 0) {


    alert("Out of guesses! :(");
    resetGame();
  }


  //stop everything from running at game over
  //return false;
}