var correctLetters = ["H", "E", "L", "L", "O"];
var guessedLetters = [];
var guesses = 0;

function addToHangman() {
  $(".wrong-" + String(guesses)).css("visibility", "visible");
}

function setUpWord(word) {
  correctLetters = word.split('');
  listElements = "";

  for(i = 0; i < correctLetters.length; i++) {
    listElements += "<li><div class='letter-space-" + String(i)
      + "'>&nbsp;</div></li>";
  }

  $("#word-letters").html(listElements);
}

$(document).ready(function() {

  setUpWord("hello".toUpperCase());

  $("#letter-submit").click(function() {
    // Set variable for guessed letter as upper case
    var checkLetter = String($("#user-input").val()).toUpperCase();
    // Check if letter is in correct letters array and set index
    if($.inArray(checkLetter, guessedLetters) !== -1) {
      $("#stat-box").html("<p>Already guessed " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) + "</p><p>guessed letters: " + guessedLetters + "</p>");
    } else {
      letterIndex = $.inArray(checkLetter, correctLetters);
      // Guess was correct
      if(letterIndex !== -1) {
        // Add letter from correctLetters to ordered list
        var letterClass = ".letter-space-" + String(letterIndex);
        $(letterClass).html(correctLetters[letterIndex]);
        guessedLetters.push(checkLetter);
        $("#stat-box").html("<p>word has " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) + "</p><p>guessed letters: " + guessedLetters + "</p>");
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
        $("#stat-box").html("<p>word does not have " + checkLetter +  "</p><p>guesses remaining: " + (6 - guesses) + "</p><p>guessed letters: " + guessedLetters + "</p>");
      }
    }

  });
});
