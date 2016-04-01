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

});
