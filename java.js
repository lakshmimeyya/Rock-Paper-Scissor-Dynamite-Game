// ----Global Variables---

var gamePieces ;
var userInput= "";
var computerInput = "";
var resultsDisplay;

function gamePiecesInit () {
    gamePieces = ["Rock","Paper","Scissors","Dynamite"];
        userInput = prompt("Select one from these values: Rock, Paper, Scissors or Dynamite");
        try
        {
            userInput = userInput.toLowerCase();
            if (userInput!="rock" && userInput != "scissors" && userInput != "paper" && userInput != "dynamite")
            {
                alert("Please select Rock, Paper, Scissors or Dynamite");
                document.getElementById('refreshButton').click();
                return;
            }
        }
        catch (error) {
            alert("Please make sure you select: Rock, Paper, Scissors or Dynamite");
            document.getElementsById('#refreshButton').click();
            return;
        }


        // ----get random computer input
        computerInput = getRandomGamePiece(gamePieces.length);
        computerInput = computerInput.toLowerCase();
        whoWins();
        function getRandomGamePiece(arrayLength)
        {
          var randPiece;
          var randIndex;
          randIndex = Math.floor((Math.random()*(arrayLength-1)))
          randPiece = gamePieces[randIndex];
          return randPiece;
        }
// ----Checking condition using switch statements--
function whoWins() {
    var winner;
    switch (userInput) {
        case "rock":
            switch (computerInput) {
                case "rock":
                    winner = "tie";
                    break;
                case "scissors":
                    winner = "You";
                    break;
                case "paper":
                    winner = "Computer";
                    break;
                case "dynamite":
                    winner = "Computer";
                    break;

            }
            break;
        case "scissors":
            switch (computerInput) {
                case "rock":
                    winner = "Computer";
                    break;
                case "scissors":
                    winner = "tie";
                    break;
                case "paper":
                    winner = "You";
                    break;
                case "dynamite":
                    winner = "You";
                    break;

            }
            break;
        case "paper":
            switch (computerInput) {
                case "rock":
                    winner = "You";
                    break;
                case "scissors":
                    winner = "Computer";
                    break;
                case "paper":
                    winner = "tie";
                    break;
                case "dynamite":
                    winner = "Computer";
                    break;
            }
            break;
        case "dynamite":
            switch (computerInput) {
                case "rock":
                    winner = "You";
                    break;
                case "scissors":
                    winner = "Computer";
                    break;
                case "paper":
                    winner = "You";
                    break;
                case "dynamite":
                    winner = "tie";
                    break;
            }
            break;

    }

    if (winner == "tie")
    {
        resultsDisplay = "<h2>Computer Selected "+ computerInput +  "<h2>You Selected "+ userInput+"</h2>" + " <h1> It's a Tie ! </h1>";
    }
    else if (winner == "Computer")
    {
    resultsDisplay = "<h2>Computer Selected "+ computerInput + "</h2>"+  "<h2>You Selected "+ userInput+"</h2>" +" <h1> COMPUTER is the winner! </h1>";

    }
    else if (winner == "You"){
        resultsDisplay = "<h2>Computer Selected "+ computerInput + "</h2>"+  "<h2>You Selected "+ userInput+"</h2>" +" <h1> YOU are the winner! </h1>";

    }
  }
}

// ----JQuery to display result---
$(document).ready(function () {
  $("#playButton").click( function() {
      $("#results").append(resultsDisplay);
      $("#playButton").prop('disabled',true).css({"color":"#0375B4","cursor":"none"});
      $("#refreshButton").prop('disabled',false).css({"color":"white","cursor":"pointer"});
  });

  $('#refreshButton').click(function() {
      $("#playButton").prop('disabled',false).css({"color":"white","cursor":"pointer"});
      $("#refreshButton").prop('disabled',true).css({"color":"#0375B4","cursor":"none"});
      $("#results").empty();
      resultsDisplay = "";
  });
});
