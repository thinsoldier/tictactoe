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
  
  var buttons = {};
  buttons.x = $("#playAsX");
  buttons.o = $("#playAsO");
  buttons.multi = $("#multiPlayer");
  buttons.single = $("#singlePlayer");
  
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

  var checkWinState = function()
  {
    var winFormats = [
      // horizontal
      [0,1,2],
      [3,4,5],
      [6,7,8],
      //Vertical
      [0,3,6],
      [1,4,7],
      [2,5,8],
      //diagonal
      [0,4,8],
      [2,4,6]
    ];
    for(i in winFormats)
    {
      var grouping = winFormats[i];
      var a = $cells.eq(grouping[0]).html();
      var b = $cells.eq(grouping[1]).html();
      var c = $cells.eq(grouping[2]).html();
      
      if( a === b && b === c && a !== ''){
        messageAlert( a + " wins !");
        gameOver = true;
        highlightWinningMove( grouping );
      }
    }
    // game ends without winner
    if( !gameOver && findEmptyCells().length === 0 )
    {
      messageAlert("Tie!");
      gameOver = true;
    }
  }
  
  var autoPlay = function()
  {
    var myCallback = function() {
      randomEmptyCell().click();
      if(gameOver){ window.clearInterval(intervalID); }
    }

    var intervalID = window.setInterval(myCallback, 500);
  };

  //-----------------------------
  // Observe UI interaction events
  //-----------------------------

  $("#resetButton").click( resetBoard );

  $("#autoButton").click( autoPlay );

  $("#playAsO").click(function(e) {
    if (gameStart === false) {
      playerMove = false;
      playerIsX = false;
      $(e.target).addClass('active');
      $("#playAsX").removeClass('active');
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#playAsX").click(function(e) {
    if (gameStart === false) {
      playerMove = true;
      playerIsX = true;
      $(e.target).addClass('active');
      $("#playAsO").removeClass('active');
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#singlePlayer").click(function(e) {
    if (gameStart === false) {
      isSinglePlayer = true;
      $(e.target).addClass('active');
      $("#multiPlayer").removeClass('active');
      if (playerIsX === false) {
        $("#0").trigger("click");
      }
    } else {
      messageAlert("Game already started!");
    }
  });

  $("#multiPlayer").click(function(e) {
    if (gameStart === false) {
      isSinglePlayer = false;
      $(e.target).addClass('active');
      $("#singlePlayer").removeClass('active');
    } else {
      messageAlert("Game already started!");
    }
  });

  $(".square").click(function() {
    // #1 update cell
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
    
    // #2 check win state after click.
    checkWinState();

    // #3 If Single-player AI is active trigger clicking a random empty cell.
    if (isSinglePlayer === true 
      && gameOver === false 
      && playerMove === false) {
      randomEmptyCell().trigger("click");
      
      // #4 check win state again after AI click.
      checkWinState();
      
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
    
    $("button").removeClass('active');
    buttons.x.addClass('active');
    buttons.multi.addClass('active');

    $("td").empty();
    
    $(".square").removeClass("X O winning");
  }
  
  this.resetBoard = resetBoard;
  this.findEmptyCells = findEmptyCells;
  this.randomEmptyCell = randomEmptyCell;
  
};