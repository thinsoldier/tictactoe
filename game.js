var game = null;

$(document).ready(function(){
  game = new TicTacToe();
});

//-----------------------------

  
var TicTacToe = function() 
{
  var moveX = true;
  var playerMove = true;
  var gameStart = false;
  var playerIsX = true;
  var isSinglePlayer = false;
  var gameOver = false;
  
  var $cells = $('.board td');
  
  var $messageBox = $('.i-message-box span');
  
  var messageAlert = function( text )
  {
    $messageBox.stop().css('opacity',1);
    $messageBox.html(text).animate( {opacity:0}, 3000 );
  }
  
  var highlightWinningMove = function( items )
  {
    for( i in items)
    { $cells.eq( items[i] ).addClass('winning'); }
  }
  
  // Returns array of indexes of $cells that are empty
  var findEmptyCells = function()
  {
    var list = [];
    $cells.each(function(i,e){ 
      if( $(e).html()==='') 
      { list.push(i); }
    })
    return list;
  }
  
  var randomEmptyCell = function()
  {
    var options = findEmptyCells();
    var randomIndex = options[Math.floor(Math.random()*options.length)];
    return $cells.eq(randomIndex);
  }

  $("#resetButton").click( resetBoard );

  $("#playAsO").click(function() {
    if (gameStart === false) {
      playerMove = false;
      playerIsX = false;
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#playAsX").click(function() {
    if (gameStart === false) {
      playerMove = true;
      playerIsX = true;
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#singlePlayer").click(function() {
    if (gameStart === false) {
      isSinglePlayer = true;
      if (playerIsX === false) {
        $("#0").trigger("click");
      }
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#multiPlayer").click(function() {
    if (gameStart === false) {
      isSinglePlayer = false;
    } else {
      messageAlert("Game already started!");
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
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([0,1,2]);
      
    } else if ($("#3").text() == "X" && $("#4").text() == "X" && $("#5").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([3,4,5]);
      
    } else if ($("#6").text() == "X" && $("#7").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([6,7,8]);
      
    }
    // Vertical X Wins
    if ($("#0").text() == "X" && $("#3").text() == "X" && $("#6").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([0,3,6]);
      
    } else if ($("#1").text() == "X" && $("#4").text() == "X" && $("#7").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([1,4,7]);
      
    } else if ($("#2").text() == "X" && $("#5").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([2,5,8]);
      
    }
    // Diagonal X Wins
    if ($("#0").text() == "X" && $("#4").text() == "X" && $("#8").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([0,4,8]);
      
    } else if ($("#2").text() == "X" && $("#4").text() == "X" && $("#6").text() == "X" && gameOver === false) {
      messageAlert("X wins!");
      gameOver = true;
      highlightWinningMove([2,4,6]);
      
    }
    // Horizontal O Wins
    if ($("#0").text() == "O" && $("#1").text() == "O" && $("#2").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([0,1,2]);
      
    } else if ($("#3").text() == "O" && $("#4").text() == "O" && $("#5").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([3,4,5]);
      
    } else if ($("#6").text() == "O" && $("#7").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([6,7,8]);

    }
    // Vertical O Wins
    if ($("#0").text() == "O" && $("#3").text() == "O" && $("#6").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([0,3,6]);

    } else if ($("#1").text() == "O" && $("#4").text() == "O" && $("#7").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([1,4,7]);
      
    } else if ($("#2").text() == "O" && $("#5").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([2,5,8]);
      
    }
    // Diagonal O Wins
    if ($("#0").text() == "O" && $("#4").text() == "O" && $("#8").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([0,4,8]);
      
    } else if ($("#2").text() == "O" && $("#4").text() == "O" && $("#6").text() == "O" && gameOver === false) {
      messageAlert("O wins!");
      gameOver = true;
      highlightWinningMove([2,4,6]);
      
    }
    else if($("#0").text() != "" && $("#1").text() != "" && $("#2").text() != "" && $("#3").text() != "" && $("#4").text() != "" && $("#5").text() != ""
           && $("#6").text() != "" && $("#7").text() != "" && $("#8").text() != "") {
      messageAlert("Tie!");
      gameOver = true;
    }

    // Single-player AI
    // If it is the AI's turn, click a random empty cell.
    if (isSinglePlayer === true 
      && gameOver === false 
      && playerMove === false) {
      randomEmptyCell().trigger("click");
      
      // but really should have an array of win conditions that 
      // gets looped through to see if the AI player has any
      // win conditions that are alreay 2/3 of the way there
      // so it chooses to make that play instead of a random play.
      // Secondly, the AI player should check if the human player has
      // any win conditions that are already 2/3 of the way there
      // so it should choose to make a play that will block the human.
    }
    
  });

  function resetBoard() {
    moveX = true;
    playerMove = true;
    gameStart = false;
    playerIsX = true;
    isSinglePlayer = false;
    gameOver = false;

    $("td").empty();
    
    $(".square").removeClass("X O winning");
  }
};