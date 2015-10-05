(function(globals){ // IIFE
// Not this again...

    // it('should totally fail', function(){
    //   chai.expect(false).equals(true);
    // })

    it("should have a 'game' in the 'window'", function(){
      chai.expect(window.game).to.be.equal(game);
      chai.expect(game).is.an('object');
      // chai.expect(game.board).to.exist;
      // chai.expect(game.board).to.be.a('function');
      // chai.expect(game).to.have.keys(['next','board']);
    });

    it('should give me a big array as the board', function(){
      chai.expect(game.board()).to.be.an('array');
      chai.expect(game.board()).to.have.length(8);

      var board = game.board();

      chai.expect(board[0]).to.be.an('array');
      chai.expect(board[0][0]).to.be.a('string');
      chai.expect(board[0][0]).to.equal('R');

    }); // END it should be a big Array

    it('should tell us what game.reset returns', function(){
      chai.expect(game.reset()).to.be.an('array');
    });

    it('should tell me what piece is at a position', function(){
      expect(game.pieceAt(6,3)).to.equal('p');
      expect(game.pieceAt(6,2)).to.equal('p');
      expect(game.pieceAt(4,3)).to.be.null;
      expect(game.pieceAt(0,0)).to.equal('R');
    });

    it('should have the applyMove function', function(){
      //chai.expect(game.applyMove()).to.be.a('function');

      // First applied move
      // Pre conditions...
      game.reset(); // Re-initialize the board
      var board = game.board();
      expect(board[6][3]).to.be.equal('p');
      expect(board[4][3]).to.be.null;

      function toTracer(rows){
        return rows.join('\n') + '\n';
      }

      expect(game.tracer()).to.equal(toTracer([
        '|R|N|B|Q|K|B|N|R|',
        '|P|P|P|P|P|P|P|P|',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '|p|p|p|p|p|p|p|p|',
        '|r|n|b|q|k|b|n|r|',
      ]));

      // Action to change the world...
      // game.applyMove(
      //   {from: {rank: 6, file: 3},
      //   to: {rank: 4, file: 3}
      // });
      game.applyMove(6, 3, 4, 3);

      // Post conditions...
      var board = game.board();
      expect(board[6][3]).to.be.null;
      expect(board[4][3]).to.be.equal('p');

      //Second applied move
      //Pre conditions...
      game.reset(); // Re-initialize the board
      var board = game.board();
      expect(board[0][6]).to.be.equal('N');
      expect(board[2][5]).to.be.null;

      // Action to change the world...
      game.applyMove(0, 6, 2, 5);

      // Post conditions...
      var board = game.board();
      expect(board[0][6]).to.be.null;
      expect(board[2][5]).to.be.equal('N');

    });

    it('should be able to advance to the next move', function(){
      // TODO: Maybe I should write some tests for this?
      // First Move
      // Pre conditions...
      game.reset(); // Re-initialize the board
      var board = game.board();
      expect(board[6][3]).to.be.equal('p');
      expect(board[4][3]).to.be.null;

      // Action to change the world...
      game.next();

      // Post conditions...
      var board = game.board();
      expect(board[6][3]).to.be.null;
      expect(board[4][3]).to.be.equal('p');

      // Second Move
      // Pre conditions...
      var board = game.board();
      expect(board[0][6]).to.be.equal('N');
      expect(board[2][5]).to.be.null;

      // Action to change the world...
      game.next();

      // Post conditions...
      var board = game.board();
      expect(board[0][6]).to.be.null;
      expect(board[2][5]).to.be.equal('N');
    });

    it('should be able to step back to the prev move', function(){
      //Turn back second move...
      // Pre conditions...
      var board = game.board();
      expect(board[0][6]).to.be.null;
      expect(board[2][5]).to.be.equal('N');

      // Actions to change the world...
      game.prev();

      // Post conditions...
      var board = game.board();
      expect(board[0][6]).to.be.equal('N');
      expect(board[2][5]).to.be.null;

      // Turn back first move...
      // Pre conditions...
      var board = game.board();
      expect(board[6][3]).to.be.null;
      expect(board[4][3]).to.be.equal('p');

      // Actions to change the world...
      game.prev();

      // Post conditions...
      var board = game.board();
      expect(board[6][3]).to.be.equal('p');
      expect(board[4][3]).to.be.null;
    });

    it('should reset the board to original state',function(){
      expect(game.reset()).to.be.equal(initial()); // To compare the result of game.reset to the result of initial, which would prove it is working.
    });

    it('should show result of final move when game.end is invoked', function(){
      // Pre conditions...
      game.reset();
      var board = game.board();
      expect(board[6][3]).to.be.equal('p');
      expect(board[4][3]).to.be.null;

      // Action that changes the world...
      game.end();

      // Post conditions...
      var board = game.board();
      expect(board[5][5]).to.be.equal('n');
      expect(board[7][6]).to.be.null;


    });

})(window || module && module.exports || this);
