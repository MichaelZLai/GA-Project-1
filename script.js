//Initiate prompt to store word to be guessed
$("#start").on("click", startGame);

function startGame(){
  var wordInput = prompt("Put a word to guess!")
  var guessArr = [];
  var guess;

  var lives = 6;
  var counter = 0;
// Create underscores of letters to be guessed
function updateLetter(){
  var wordHolder = document.getElementById("word");
  var correct = document.createElement("ul");
  for (i=0; i<wordInput.length; i++){
    correct.setAttribute("id","myWord");
    var guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if (wordInput[i] === " ") {
            guess.innerHTML = " ";
            space = 1;
          } else {
            guess.innerHTML = "_";
          };

          guessArr.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      };
updateLetter();

//If user gets a right letter, show letter on board ELSE show body part
  $("li#letter").on("click", guessLetter);
  function guessLetter() {
    var guess = (this.innerHTML);
    console.log("letter selected is ",$(this).text());
    $(this).on("click", null);
    for (var i = 0; i < wordInput.length; i++) {
      if (wordInput[i] === guess) {
        guessArr[i].innerHTML = guess;
        counter += 1;
      }
    }
    //
    var isLetter= (wordInput.indexOf(guess));
    if (isLetter === -1) {
      lives -= 1;
      showLives();
    } else {
      showLives();
    }
    console.log($(this));

    // does the element that I clicked have a class of "active"
    var isActive = $(this).hasClass(".active");
    if(!isActive) {
      $(this).addClass("active")
    }
  };


// Show how many lives are left
 function showLives() {
  $("#numLives").html("You have " + lives + " lives");
  //Game Over
  if (lives < 1) {
    $("#numLives").html("Game Over");
  };
  //Winning the Game
  for (i = 0; i < guessArr.length; i++) {
    if (counter === guessArr.length) {
      $("#numLives").html("You Win!");
    }
  }
}
//Prevent user from asking the same letter


};
