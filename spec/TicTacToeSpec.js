describe("TicTacToe", function() {
  var game;

  beforeEach(function() {
    game = new TicTacToe();
  });

  it("should be able to play a game", function() {
    game.play();
    expect(game.isPlaying).toEqual(true);
  });

  it("has an empty grid when we first play", function() {
    game.play();
    expect(game.grid).toEqual(['','','','','','','','','']);
  });

  it("when playing it should be 'X''s turn first", function() {
    game.play();
    game.calculateTurn()
    expect(game.turn).toEqual('X');
  });

  it("alternates turns when a move is registered", function() {
    game.play();
    game.move()
    expect(game.turn).toEqual('O');
  });

  it("alternates turns when a move is registered again", function() {
    game.play();
    game.move()
    game.move()
    expect(game.turn).toEqual('X');
  });

  it("plots the correct marker for first move", function() {
    game.play();
    game.move(1)
    expect(game.grid).toEqual(['','X','','','','','','','']);
  });

  it("plots the correct marker for second move", function() {
    game.play();
    game.move(1)
    game.move(2)
    expect(game.grid).toEqual(['','X','O','','','','','','']);
  });

  it("knows when there is a winner in the top row", function() {
    game.grid = ['X','X','X','','','','','',''];
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the bottom row", function() {
    game.grid = ['','','','','','','X','X','X'];
    console.log('broken test')
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the middle row", function() {
    game.grid = ['','','','X','X','X','','',''];
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the left column", function() {
    game.grid = ['X','','','X','','','X','',''];
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the middle column", function() {
    game.grid = ['','X','','','X','','','X',''];
    expect(game.winner()).toEqual('X');
  });
  it("knows when there is a winner in the right column", function() {
    game.grid = ['','','X','','','X','','','X'];
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the left right", function() {
    game.grid = ['X','','','','X','','','','X'];
    expect(game.winner()).toEqual('X');
  });

  it("knows when there is a winner in the diagonal right", function() {
    game.grid = ['','','X','','X','','X','',''];
    expect(game.winner()).toEqual('X');
  });

});
