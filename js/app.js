// $(function) { - other way
$(document).ready(function() {

  var $gameCells = $('.cell');

  $($gameCells).one('click', function() {
    console.log('Gameboard clicked!');
    console.log(this.id);
  });

});
