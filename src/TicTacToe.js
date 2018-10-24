function TicTacToe() {
  this.moveCount = 0;
}

TicTacToe.prototype.play = function() {
  this.isPlaying = true;
  this.calculateTurn()
  this.grid = ['','','','','','','','','']
};

TicTacToe.prototype.move = function(position) {
  this.calculateTurn()
  this.grid[position] = this.turn;
  this.moveCount = this.moveCount + 1;
  this.calculateTurn()
};

TicTacToe.prototype.calculateTurn = function() {
  if(this.moveCount % 2 == 0){
    this.turn = 'X';
  } else {
    this.turn = 'O';
  }
};


TicTacToe.prototype.winner = function() {
  console.log(this.grid);
  //top row
if ((this.grid[0] === this.grid[1]) && (this.grid[0] === this.grid[2]) && (this.grid[0] != ''))
  {
    return(this.grid[0]);
  }
  //bottom row
else if ((this.grid[6] === this.grid[7]) && (this.grid[6] === this.grid[8]) && (this.grid[6] != ''))
  {
    return(this.grid[6]);
  }
  //middle row
else if ((this.grid[3] === this.grid[4]) && (this.grid[3] === this.grid[5]) && (this.grid[3] != ''))
  {
    return(this.grid[3]);
  }
  //left diagonal
else if ((this.grid[0] === this.grid[4]) && (this.grid[3] === this.grid[8]) && (this.grid[0] != ''))
  {
    return(this.grid[0]);
  }
  //right diagonal
else if ((this.grid[2] === this.grid[4]) && (this.grid[2] === this.grid[6]) && (this.grid[2] != ''))
  {
    return(this.grid[2]);
  }
  //right column
else if ((this.grid[2] === this.grid[5]) && (this.grid[2] === this.grid[8]) && (this.grid[2] != ''))
  {
    return(this.grid[2]);
  }
  //middle column
else if ((this.grid[1] === this.grid[4]) && (this.grid[1] === this.grid[7]) && (this.grid[1] != ''))
  {
    return(this.grid[1]);
  }
  //left column
else ((this.grid[0] === this.grid[3]) && (this.grid[0] === this.grid[6]) && (this.grid[0] != ''))
  {
    return(this.grid[0]);
  }
};
