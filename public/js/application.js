function Board(rows, cols) {
  this.rows = rows;
  this.cols = cols;
}

Board.prototype.colorCell = function(row, col, color) {
  // "this" at this point is the *instance* of the Board
  console.log(this.rows, ",", this.cols);
}

var board1 = new Board(3,4)



$(document).ready(function(){

  $('.container').on('click', 'a', function(e) {
    $.ajax({
      url: '/color',
      method: 'post'
    }).done(function(data) {
      $('#color_me li').eq(data.cell - 1).css("background-color", data.color)
    })
  });
});
