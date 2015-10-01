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

    it('should have the applyMove function', function(){
      chai.expect(applyMove).to.be.a('function');
    });



    it('should be able to move pieces', function(){
      // board[0][0] = board[0][1];
      game.applyMove(
        // TODO: one day take {file: 'd', rank: 2 },
        {from: {rank: 6, file: 3}, // from
        // TODO: one day take {file: 'd', rank: 4 }
        to: {rank: 4, file: 3}} // to
      );

      var board = game.board();

      chai.expect(board[6][3]).to.be.equal(null); // we didn't actually move the piece in the actual code yet because applyMove is not filled out.
      chai.expect(board[4][3]).to.be.equal('p'); // we didn't actually move the piece in the actual code yet because applyMove is not filled out.

    });

    it.skip('should be able to advance to the next move', function(){
      // TODO: Maybe I should write some tests for this?
      chai.expect(game.applyMove(Move[1])).to.be.equal({from: {rank: 0, file: 6}, to: {rank: 2, file: 5}}); // To confirm that applyMove is correctly moving through the Move array of dictionaries.
      chai.expect(game.next()).to.be.equal(Move[1]); // To confirm that when game.next is invoked it is equal to the next index within the Move array of dictionaries.
      // TODO: Figure out how to replace the [1] sub-index in the above Move array with a variable that changes as you iterate through the array. Maybe ++?
    });

    it.skip('should be able to step back to the prev move', function(){
      chai.expect(game.applyMove(Move[0])).to.be.equal({from: {to: 6, file: 3}, from: {rank: 4, file: 3}}); // To confirm that applyMove is correctly stepping back through the array of dictionaries.
      // TODO: Logic seems right for stepping backwards but NEED to figure out how to do that with a sub-index variable.  Maybe --?
    });

    it.skip('should reset the board to original state',function(){
      chai.expect(game.reset()).to.be.equal(initial()); // To compare the result of game.reset to the result of initial, which would prove it is working.
    });

    it.skip('should show result of final move when game.end is invoked', function(){
      chai.expect(game.end()).to.be.equal(totalMoves.result);  //Really have no clue here.  Just taking a shot in the dark as it is currently 1:40am.  Will revisit when rested.
      // TODO: Need to solve how to get the array representation when game.next is equal to the value of totalMoves and then assigned to game.end.
    });

})(window || module && module.exports || this);
