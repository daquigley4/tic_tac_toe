// $(function) { - other way
$(document).ready(function() {

  var $gameCells = $('.cell');
  var moves = ["", "", "", "", "", "", "", "", ""];
  var winner = null;
  var scoreX = 0;
  var scoreO = 0;
  var counter = 0;
  var turn = 'X';


// singleClick();

// function singleClick() {

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
    console.log('Score = ' + scoreX + ' : ' + scoreO);


//Determine Winner
function getWinner(turn) {
  if (winnerIs('X')) {
    return 'Player X wins!';
    scoreX++;
  }
  if (winnerIs('O')) {
    return 'Player O wins!';
    scoreO++;
  }
  else {
    return null;
  }
}

function winnerIs(turn){
  return winByRow(turn) || winByColumn(turn) || winByDiagonal(turn);
}

function winByRow(turn) {
    return threeOfAKind(turn, moves[0], moves[1], moves[2]) || threeOfAKind(turn, moves[3], moves[4], moves[5]) || threeOfAKind(turn , moves[6], moves[7], moves[8]);
}

function winByColumn(turn) {
    return threeOfAKind(turn, moves[0], moves[3], moves[6]) || threeOfAKind(turn, moves[1], moves[4], moves[7]) || threeOfAKind(turn , moves[2], moves[5], moves[8]);
}

function winByDiagonal(turn) {
    return threeOfAKind(turn, moves[0], moves[4], moves[8]) || threeOfAKind(turn, moves[2], moves[4], moves[6]);
}

function threeOfAKind(turn, cell1, cell2, cell3) {
  return ((cell1 === turn) && (cell2 === turn) && (cell3 === turn));
}


winner = getWinner();

if (winner !== null) {
    alert(winner);
}
else if ((counter === 9) && (winner === null)) {
    alert("Nobody wins! It's a tie!");
}

  });

// }
/*
$('#play_again').on('click', function() {
    console.log('Game reset!');
    // moves[this.id] = (counter % 2 == 0)? 'X' : 'O';
    // moves[this.id] = this.id;
    moves = ["", "", "", "", "", "", "", "", ""];
    $('.cell').html("");
    counter = 0;
    turn = 'X';
    winner = null;
    console.log(moves, counter, turn);
    console.log('Score = ' + scoreX + ' : ' + scoreO);
singleClick();
});
*/

});
