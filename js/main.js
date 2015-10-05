console.log("Loaded main.js");
(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [

    // Refactored way of moving pieces on the board...
    {from: {rank: 6, file: 3},
    to: {rank: 4, file: 3}},
    {from: {rank: 0, file: 6},
    to: {rank: 2, file: 5}},
    {from: {rank: 6, file: 2},
    to: {rank: 4, file: 2}},
    {from: {rank: 1, file: 4},
    to: {rank: 2, file: 4}},
    {from: {rank: 6, file: 6},
    to: {rank: 5, file: 6}},
    {from: {rank: 1, file: 3},
    to: {rank: 3, file: 3}},
    {from: {rank: 7, file: 5},
    to: {rank: 6, file: 6}},
    {from: {rank: 0, file: 5},
    to: {rank: 1, file: 4}},
    {from: {rank: 7, file: 6},
    to: {rank: 5, file: 5}}

    // Original way of moving the pieces on the board...
    // [6, 3, 4, 3],
    // [0, 6, 2, 5],
    // [6, 2, 4, 2],
    // [1, 4, 2, 4],
    // [6, 6, 5, 6],
    // [1, 3, 3, 3],
    // [7, 5, 6, 6],
    // [0, 5, 1, 4],
    // [7, 6, 5, 5]

    // TODO: Fill me in!
  ]; // END moves

  // Created var to keep track of moves
  var cmCounter = 0;
  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();
      cmCounter = 0;
      return this; // "this" in the context of a function, refers to the object to which the function belongs.  In this case "this" refers to the object which reset belongs and it belongs to the game object.
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      // Super simple dummy test...
      //game.applyMove(6, 3, 4, 3);

      // Set a condition to ensure that your counter doesn't exceed the length of the array.
      if(cmCounter < moves.length) {
      // Slightly smarter test with array of moves...
        var move = moves[cmCounter];
        console.log(move);
        // Refactored way of performing next move...
        game.applyMove(move.from.rank, move.from.file, move.to.rank, move.to.file);

        // Original way of performing next move...
        //game.applyMove(move[0], move[1], move[2], move[3]);

        cmCounter = cmCounter + 1;
      };
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...

      // Super simple dummy test...
      //game.applyMove(2, 5, 0, 6);

      // Set a condition to ensure that your counter doesn't exceed the length of the array.
      if(cmCounter > 0) {
      // Like next but in reverse...
        cmCounter = cmCounter - 1;
        var move = moves[cmCounter];
        console.log(move);
        // Refactored way of performing prev move...
        game.applyMove(move.to.rank, move.to.file, move.from.rank, move.from.file);

        // Original way of performing prev move...
        //game.applyMove(move[2], move[3], move[0], move[1]);

      };
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      do {
        game.next();
      } while (cmCounter < moves.length);

      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(fromRank, fromFile, toRank, toFile){
      // You should write something in here...
      // TODO: Apply the move 'from', 'to' to 'board'

      // The hardcoded way...
      //board[4][3] = board[6][3];
      //board[6][3] = null;

      // The slightly less hardcoded way...
      board[toRank][toFile] = board[fromRank][fromFile];
      board[fromRank][fromFile] = null;
      console.log(game.tracer());


    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
