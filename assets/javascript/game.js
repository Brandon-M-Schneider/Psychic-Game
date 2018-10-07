  //Computer choices here; alphabet array
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //Playing stats for wins, losses, guesses left, letters guessed, and computer guess
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var lettersGuessed = [];
  var computerGuess = [];

  //Computer's letter, logged to the console
  window.onload = function () {
      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      computerGuess.push(compGuess);
      console.log(computerGuess[0]);
  }

  //Gameplay Java here
  document.onkeyup = function (event) {
      var playerGuess = event.key;
      lettersGuessed.push(playerGuess);
      console.log(computerGuess[0]);

      if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
          wins++;
          guessesLeft = 9;
          lettersGuessed.length = 0;
          computerGuess.length = 0;
          var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          computerGuess.push(compGuess);
          console.log(computerGuess[0]);
      }

      else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
          guessesLeft = guessesLeft - 1;
      }

      else {
          losses++;
          guessesLeft = 9;
          lettersGuessed.length = 0;
          computerGuess.length = 0;
          var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          computerGuess.push(compGuess);
          console.log(computerGuess[0]);
      }

      var html =
          "<p>Let's play a game. Guess what letter I'm thinking of! If you guess it, you win!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses: " + lettersGuessed + "</p>";

      document.querySelector("#theGame").innerHTML = html;

  }
