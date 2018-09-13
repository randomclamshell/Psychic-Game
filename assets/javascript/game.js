// psychic word guess

//create an array for the letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(letters);

//variables to keep score
var gameScore
var losses
var wins
var guesses


//reset the stats
var gameScore = 0;
var losses = 0;
var wins = 0;
var guesses = 10;


//print letter typed



//variables to hold html elements/the text that stays on the screen
var displayHTML = document.getElementById ("display");


//reset the game
function resetGame() {
  var gameScore = 0;
var losses = 0;
var wins = 0;
var guesses = 10;
}

//print the score to the page
printScore(gameScore, losses, wins, guesses);
print(keyPressed);

//what is going to happen onkeyup
document.onkeyup = function(event) {}

//get the value of the key that's pressed
var keyPressed = event.key;

// variable statements
if (keyPressed !== letters) {

  losses++;
  guesses --;
}

if (keyPressed === letters) {

  wins++;
  guesses --;
}

if (guesses === 0) {
  messageHTML.textContent = "Out of guesses! :("
}
//stop everything from running at game over
return false;