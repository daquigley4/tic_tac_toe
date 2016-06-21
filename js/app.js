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

var xwing = new Audio('sounds/XWing-Laser.wav');
var tiefighter  = new Audio('sounds/TIE-Fire.wav');
var starwars = new Audio('sounds/star-wars-theme-song.mp3');
    starwars.duration = 5;
    starwars.volume = 0.15;
var imperials = new Audio('sounds/imperial_march.wav');
    imperials.duration = 5;
var rebels = new Audio('sounds/rebel-theme.wav');
    rebels.duration = 5;
var chewbacca = new Audio('sounds/chewy_roar.wav');

$('#scoreX').text(scoreX);
$('#scoreO').text(scoreO);
$('#scoreTie').text(ties);

// starwars.play();

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
  $('#players').html('<h3>Player 1 is ' + turn + '!</h3>')
    .attr("style", "text-align: center; font-size: 1em;");
  playGame(turn);
});
//

// Reset game
$($resetButton).on('click', function() {
  $($gameCells).off('click');
  $('.cell').html("");
  $(this).on();
  rebels.pause();
  rebels.currentTime = 0;
  imperials.pause();
  imperials.currentTime = 0;
  chewbacca.pause();
  chewbacca.currentTime = 0;
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
    if (turn === 'Rebels') {
    $(this).html('<img id="xwing" src="css/images/X_Wing.png" />')
      .attr("style", "text-align: center; vertical-align: middle;");
    xwing.play();
    }
    if (turn === 'Imperials') {
    $(this).html('<img id="tiefighter" src="css/images/Tie_Fighter.png" />')
      .attr("style", "text-align: center; vertical-align: middle;");
    tiefighter.play();
    }
    moves[this.id] = turn;
    // counter++;

    if (counter % 2 == 0 && turn === 'Rebels') {
      counter++;
      turn = 'Imperials';
      getWinner('Imperials');
    }
    else if (counter % 2 != 0 && turn === 'Imperials') {
      counter++;
      turn = 'Rebels';
      getWinner('Rebels');
    }
    else if (counter % 2 == 0 && turn === 'Imperials') {
      counter++;
      turn = 'Rebels';
      getWinner('Rebels');
    }
    else if (counter % 2 != 0 && turn === 'Rebels') {
      counter++;
      turn = 'Imperials';
      getWinner('Imperials');
    }

    console.log(this.id);
    console.log(moves, counter, turn);
    console.log('Score = ' + scoreX + ' : ' + scoreO + ' Ties = ' + ties);

    $("input:radio[name=player]").off();
    $('#scoreX').text(scoreX);
    $('#scoreO').text(scoreO);
    $('#scoreTie').text(ties);

    // $(this2).html(turn).attr("style", "color: lightblue; text-align: center; line-height:150px;")
  });
//

//Determine Winner
  function getWinner(turn) {
    if (winnerIs('Rebels')) {
      rebels.play();
      alert('Rebels win!');
      scoreX++;
      $($gameCells).off('click');
      $('#play_again').show().attr("style", "margin: 0 auto;");
    }
    else if (winnerIs('Imperials')) {
      imperials.play();
      alert('Imperials win!');
      scoreO++;
      $($gameCells).off('click');
      $('#play_again').show().attr("style", "margin: 0 auto;");
    }
    else if (counter === 9 && winner === null) {
      chewbacca.play();
      alert("Nobody wins! It's a tie!");
      ties++
      $($gameCells).off('click');
      $('#play_again').show().attr("style", "margin: 0 auto;");
    }
  }

  function winnerIs(turn){
    return winByRow(turn) || winByColumn(turn) || winByDiagonal(turn);
  }

  function winByRow(turn) {
    return threeOfAKind(turn, moves[0], moves[1], moves[2]) ||
           threeOfAKind(turn, moves[3], moves[4], moves[5]) ||
           threeOfAKind(turn , moves[6], moves[7], moves[8]);
  }

  function winByColumn(turn) {
    return threeOfAKind(turn, moves[0], moves[3], moves[6]) ||
           threeOfAKind(turn, moves[1], moves[4], moves[7]) ||
           threeOfAKind(turn , moves[2], moves[5], moves[8]);
  }

  function winByDiagonal(turn) {
    return threeOfAKind(turn, moves[0], moves[4], moves[8]) ||
           threeOfAKind(turn, moves[2], moves[4], moves[6]);
  }

  function threeOfAKind(turn, cell1, cell2, cell3) {
    return ((cell1 === turn) && (cell2 === turn) && (cell3 === turn));
  }

}
//

});
