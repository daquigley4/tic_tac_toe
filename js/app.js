$(document).ready(function() {

var $gameCells = $('.cell');
var $resetButton = $('#play_again').hide();
var scoreX = 0;
var scoreO = 0;
var ties = 0;
var winner = null;
var moves = ["", "", "", "", "", "", "", "", ""];
var counter = 0;
var turn = null;

$('#scoreX').text(scoreX);
$('#scoreO').text(scoreO);
$('#scoreTie').text(ties);

//  Alert to select player
$($gameCells).on('click', function() {
  alert('Please select a player!');
})
//

// Select "X" or "O"
$("input:radio[name=player]").on('click', function() {
  $($gameCells).off();
  turn = $(this).val();
  console.log(turn);
  $('#players').html('<h3>You are player ' + turn + '!</h3>');
  playGame(turn);
});
//

// Reset game
$($resetButton).on('click', function() {
  $($gameCells).off('click');
  $('.cell').html("");
  $(this).on();
  moves = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  winner = null;
  // turn = 'X';
  console.log(moves, counter, turn, winner);
  console.log('Score = ' + scoreX + ' : ' + scoreO + ' Ties = ' + ties);
  console.log('Game reset!');
  $('#play_again').hide();

playGame(turn);

});
//

// Play game: start clicking board!
function playGame(turn) {

  $($gameCells).one('click', function() {
    console.log('Gameboard clicked!');
    $(this).html(turn);
    moves[this.id] = turn;
    // counter++;

    if (counter % 2 == 0 && turn === 'X') {
      counter++;
      turn = 'O';
      getWinner('O');
    }
    else if (counter % 2 != 0 && turn === 'O') {
      counter++;
      turn = 'X';
      getWinner('X');
    }
    else if (counter % 2 == 0 && turn === 'O') {
      counter++;
      turn = 'X';
      getWinner('X');
    }
    else if (counter % 2 != 0 && turn === 'X') {
      counter++;
      turn = 'O';
      getWinner('O');
    }

    console.log(this.id);
    console.log(moves, counter, turn);
    console.log('Score = ' + scoreX + ' : ' + scoreO + ' Ties = ' + ties);

    $("input:radio[name=player]").off();
    $('#scoreX').text(scoreX);
    $('#scoreO').text(scoreO);
    $('#scoreTie').text(ties);

  });
//

//Determine Winner
  function getWinner(turn) {
    if (winnerIs('X')) {
      alert('Player X wins!');
      scoreX++;
      $($gameCells).off('click');
      $('#play_again').show();
    }
    if (winnerIs('O')) {
      alert('Player O wins!');
      scoreO++;
      $($gameCells).off('click');
      $('#play_again').show();
    }
    else if (counter === 9) {
      alert("Nobody wins! It's a tie!");
      ties++
      $($gameCells).off('click');
      $('#play_again').show();
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

}
//

});
