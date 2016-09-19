var wordArr = [];
var guessArr = [];

var lives = 6;

//Initiate prompt to store word to be guessed
var wordInput = prompt("Put a word to guess!");
var wordUnderline = "";

function setUnderline(){
  for (i=0; i<wordInput.length; i++){
    wordArr[i] = wordInput.charAt(i);
    console.log("Count Letters");
    guessArr[i] = "_";
  }
  wordUnderline = guessArr.join();
  $("#word").html(wordUnderline);
};

setUnderline();

//When user guesses letter, parse array of alphabet
function updateLetter(letters){
  var changes = 0;
  for (i=0;i<wordInput.length;i++){
    wordArr[i] = wordInput.charAt(i);
    if(wordInput.charAt(i) == letters){
      guessArr[i] == letters;
      changes += 1;
    }
  }

}

//If user gets a right letter, show letter on board else show body part

//Prevent user from asking the same letter

//Display alert stating you have won or lost! Play again?
var rightWord = wordArr.join("");
var guessWord = guessArr.join("");

if(rightWord == guessWord){
  alert("You win! Click OK to play again");
  location.reload();
}
