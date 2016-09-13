var correctLetters = ["H", "E", "L", "L", "O"];
var guessedLetters = [];
var guesses = 0;

function addToHangman() {
  $(".wrong-" + String(guesses)).css("visibility", "visible");
}

function setUpGame(word) {
  correctLetters = word.split('');
  listElements = "";
  guessedLetters = [];

  for(i = 0; i < guesses; i++) {
    $(".wrong-" + String(i)).css("visibility", "hidden");
  }

  guesses = 0;

  for(i = 0; i < correctLetters.length; i++) {
    listElements += "<li><div class='letter-space-" + String(i)
      + "'>&nbsp;</div></li>";
  }

  $("#word-letters").html(listElements);
}

$(document).ready(function() {

  $("#submit-user-word").click(function() {
    var newGameWord = String($("#user-entered-word").val()).toUpperCase();
    if(newGameWord !== "") {
      setUpGame(newGameWord);
    } else {

    }
  });

  // setUpWord("hello".toUpperCase());

  $("#letter-submit").click(function() {

    // Set variable for guessed letter as upper case
    var checkLetter = String($("#user-input").val()).toUpperCase();

    // Check if letter is in correct letters array and set index
    if($.inArray(checkLetter, guessedLetters) !== -1) {
      $("#stat-box").html("<p>Already guessed " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) +
       "</p><p>guessed letters: " + guessedLetters + "</p>");
    } else {
      letterIndex = $.inArray(checkLetter, correctLetters);

      // Guess was correct
      if(letterIndex !== -1) {

        // Add letter from correctLetters to ordered list
        var letterIndexArray = [];
        for(i = 0; i < 10; i++) {
          if(correctLetters[i] === checkLetter) {
            letterIndexArray.push(i);
          }
        }

        var letterClass = [];
        for(i = 0; i < letterIndexArray.length; i++) {
          $(".letter-space-" + String(letterIndexArray[i])).html(checkLetter);
        }

        $(letterClass).html(correctLetters[letterIndex]);
        guessedLetters.push(checkLetter);
        $("#stat-box").html("<p>word has " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) +
         "</p><p>guessed letters: " + guessedLetters + "</p>");
      }

      // Guess was incorrect
      else {
        guessedLetters.push(checkLetter);
        addToHangman();
        if(guesses >= 5) {
          $("#game-over-screen").fadeIn(300);
          $(".game-over-heading").html("Game Over");
        }
        guesses++;
        $("#stat-box").html("<p>word does not have " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) +
         "</p><p>guessed letters: " + guessedLetters + "</p>");
      }
    }
  });
});
