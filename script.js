//Initiate prompt to store word to be guessed
$("#reset").hide();
$("#container").hide();
$("#inputWord").hide();
$("#submit").hide();
$("#start").on("click", putWord);

function putWord(){
  //Shows input/submit and hides start button
  $("#inputWord").show();
  $("#submit").show();
  $("#start").hide();
  //Register after pressing submit to start game
  $("#submit").on("click", startGame);

//Main content of the game is shown
function startGame(){
  var wordInput = $("#inputWord").val()

  var guessArr = [];
  var guess;

  var limbs = 6;
  var counter = 0;
  //Only load main content if there is a value for input
  if ($("#inputWord").val() === ""){
    console.log("hi");
    return;
  }
  //Tells instruction to select a letter
  $("#startLetter").html("Please Select a Letter");
  //Hides input/submit and shows main body & reset button
  $("#inputWord").hide();
  $("#submit").hide();
  $("#container").show();
  $("#reset").show();
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
          } else {
            guess.innerHTML = "_";
          };

          guessArr.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      };
updateLetter();

//If user gets a right letter, show letter on board
  $("li#letter").on("click", guessLetter);
  function guessLetter() {
    var guess = (this.innerHTML);
    $(this).on("click", null);
    for (var i = 0; i < wordInput.length; i++) {
      if (wordInput[i] === guess) {
        guessArr[i].innerHTML = guess;
        counter += 1;
        console.log("You have " + counter + " letters correct");
      }
    }
    //Logic for Hangman to show limbs
    var isLetter= (wordInput.indexOf(guess));
    if (isLetter === -1) {
      limbs -= 1;
      showLimbs();
    } else {
      showLimbs();
    }
    console.log($(this));

    //Clicked letter has a class of "active"
    var isActive = $(this).hasClass(".active");
    if(!isActive) {
      $(this).addClass("active")
    }
  };


// Show how many limbs are left
 function showLimbs() {
  $("#numLimbs").html("You have " + limbs + " limbs left!");
  //Change limbs to red color to indicate how many limbs are left
  $("#numLimbs").eq(9).css("color","red");
  //Changes hallows image with limbs
  if (limbs === 5) {
    $("img").attr("src", "http://s22.postimg.org/xvxxf1z1d/image.png");
  } else if (limbs === 4){
    $("img").attr("src", "http://s22.postimg.org/4utl5neld/image.png");
  } else if (limbs === 3){
    $("img").attr("src", "http://s22.postimg.org/nbnzwgujl/image.png");
  } else if (limbs === 2){
    $("img").attr("src", "http://s22.postimg.org/v5olhv2ch/image.png");
  } else if (limbs === 1){
    $("img").attr("src", "http://s22.postimg.org/julxthvhd/image.png");
  } else if (limbs === 0) {
    gameOver();
  };
  //Winning the Game
  for (i = 0; i < guessArr.length; i++) {
    if (counter === guessArr.length) {
      $("#numLimbs").html("You Win!");
      console.log("You win");
    }
  }
  //Game over function
  function gameOver(){
    $("#numLimbs").html("Game Over");
    $("img").attr("src", "http://s22.postimg.org/h0jamymqp/image.png");
    for (var i=0; i<wordInput.length;i++){
      var currentLetter = $("li.guess").eq(i).text();
      if (wordInput[i] != currentLetter){
        //put missing letter in spot
        $("li.guess").eq(i).text(wordInput[i]);
        //set missing color to red
        $("li.guess").eq(i).addClass("missLetter");
      }
    }
  };
  }
}
}
//Refresh game with reset button
$("#reset").on("click",refreshPage);
function refreshPage() {
    location.reload();
}

//Prevent user from asking the same letter
