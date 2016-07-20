$(document).ready(function() {
  var moveX = true;
  var playerMove = true;
  var gameStart = false;
  var playerIsX = true;
  var isSinglePlayer = false;
  var gameOver = false;

  $("#resetButton").click( resetBoard );

  $("#playAsO").click(function() {
    if (gameStart === false) {
      playerMove = false;
      playerIsX = false;
    } else {
      alert("Game already started!");
    }
  });

  $("#playAsX").click(function() {
    if (gameStart === false) {
      playerMove = true;
      playerIsX = true;
    } else {
      alert("Game already started!");
    }
  });

  $("#singlePlayer").click(function() {
    if (gameStart === false) {
      isSinglePlayer = true;
      if (playerIsX === false) {
        $("#0").trigger("click");
      }
    } else {
      alert("Game already started!");
    }
  });

  $("#multiPlayer").click(function() {
    if (gameStart === false) {
      isSinglePlayer = false;
    } else {
      alert("Game already started!");
    }
  });

  $(".square").click(function() {
    if (gameOver === false) {
      if (moveX === true) {
        if ($(this).html() === "") {
          $(this).html("X").addClass("X");
          moveX = false;
          gameStart = true;
          if (playerIsX === true) {
            playerMove = false;
          } else {
            playerMove = true;
          }
        }
      } else {
        if ($(this).html() === "") {
          $(this).html("O").addClass("O");
          moveX = true;
          gameStart = true;
          if (playerIsX === true) {
            playerMove = true;
          } else {
            playerMove = false;
          }
        }
      }
    }

    // Winning conditions
    // Horizontal X Wins
    if ($("#0").text() == "X" && $("#1").text() == "X" && $("#2").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#3").text() == "X" && $("#4").text() == "X" && $("#5").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#6").text() == "X" && $("#7").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    }
    // Vertical X Wins
    if ($("#0").text() == "X" && $("#3").text() == "X" && $("#6").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#1").text() == "X" && $("#4").text() == "X" && $("#7").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#2").text() == "X" && $("#5").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    }
    // Diagonal X Wins
    if ($("#0").text() == "X" && $("#4").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#2").text() == "X" && $("#4").text() == "X" && $("#6").text() == "X" && gameOver === false) {
      alert("X wins!");
      gameOver = true;
      resetBoard();
    }
    // Horizontal O Wins
    if ($("#0").text() == "O" && $("#1").text() == "O" && $("#2").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#3").text() == "O" && $("#4").text() == "O" && $("#5").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#6").text() == "O" && $("#7").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    }
    // Vertical O Wins
    if ($("#0").text() == "O" && $("#3").text() == "O" && $("#6").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#1").text() == "O" && $("#4").text() == "O" && $("#7").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#2").text() == "O" && $("#5").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    }
    // Diagonal O Wins
    if ($("#0").text() == "O" && $("#4").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    } else if ($("#2").text() == "O" && $("#4").text() == "O" && $("#6").text() == "O" && gameOver === false) {
      alert("O wins!");
      gameOver = true;
      resetBoard();
    }
    else if($("#0").text() != "" && $("#1").text() != "" && $("#2").text() != "" && $("#3").text() != "" && $("#4").text() != "" && $("#5").text() != ""
           && $("#6").text() != "" && $("#7").text() != "" && $("#8").text() != "") {
      alert("Tie!");
      gameOver = true;
      resetBoard();
    }

    // Single-player AI
    if (isSinglePlayer === true) {
      // If it is the AI's turn
      if (gameOver === false) {
        if (playerMove === false) {
          if ($("#0").text() === "") {
            $("#0").trigger("click");
          } else if ($("#1").text() === "") {
            $("#1").trigger("click");
          } else if ($("#2").text() === "") {
            $("#2").trigger("click");
          } else if ($("#3").text() === "") {
            $("#3").trigger("click");
          } else if ($("#4").text() === "") {
            $("#4").trigger("click");
          } else if ($("#5").text() === "") {
            $("#5").trigger("click");
          } else if ($("#6").text() === "") {
            $("#6").trigger("click");
          } else if ($("#7").text() === "") {
            $("#7").trigger("click");
          } else if ($("#8").text() === "") {
            $("#8").trigger("click");
          }
        }
      }
    }

    var cells = $('td');
console.log( cells.get(0) )
console.log( cells.get(3) )
console.log( cells.get(7) )
    
  });

  function resetBoard() {
    moveX = true;
    playerMove = true;
    gameStart = false;
    playerIsX = true;
    isSinglePlayer = false;
    gameOver = false;

    $("td").empty();
    
    $(".square").removeClass("X O");
  }
});