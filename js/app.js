// $(function) { - other way
$(document).ready(function() {

  var $gameCells = $('.cell');
  var moves = ["", "", "", "", "", "", "", "", ""];
  // var moves = Array(9).join(".").split(".");
  var counter = 0;
  var turn = 'X';

  $($gameCells).one('click', function() {
    console.log('Gameboard clicked!');
    // moves[this.id] = (counter % 2 == 0)? 'X' : 'O';
    // moves[this.id] = this.id;
    $(this).html(turn);
    moves[this.id] = turn;
    counter++;
    if (counter % 2 == 0) {
      turn = 'X';
    }
    else {
      turn = 'O';
    }

    console.log(this.id);
    console.log(moves, counter, turn);

  });

//Determine Winner
var function getWinner() {
  if (winnerIs('x')) {
    return 'Player X wins!';
  }
  else if (winnerIs('o')) {
    return 'Player O wins!';
  }
  else {
    return null;
  }
}

var function winnerIs(){
  return winByRow() || winByColumn() || winByDiagonal();
}

function winByRow() {
  if (moves[0] && moves[1] && moves[2] == 'X') {
    return 'player X wins!'
  }
  else if (moves[3] && moves[4] && moves[5] == 'X') {
    return 'player X wins!'
}
  else if (moves[6] && moves[7] && moves[8] == 'X') {
    return 'player X wins!'
  }
}

function winByColumn() {

}

function winByDiagonal() {

}


  var oIsWinner = function(){

  }




});
