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

    it('should be able to move pieces', function(){
      // board[0][0] = board[0][1];
      game.applyMove(
        // TODO: one day take {file: 'd', rank: 2 },
        {rank: 6, file: 3}, // from
        // TODO: one day take {file: 'd', rank: 4 }
        {rank: 4, file: 3} // to
      );

      var board = game.board();

      chai.expect(board[6][3]).to.be.equal(null); // we didn't actually move the piece in the actual code yet because applyMove is not filled out.
      chai.expect(board[4][3]).to.be.equal('p'); // we didn't actually move the piece in the actual code yet because applyMove is not filled out.

    });

    it.skip('should be able to advance to the next move', function(){
      // TODO: Maybe I should write some tests for this?
    });

})(window || module && module.exports || this);
