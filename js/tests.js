(function(globals){ // IIFE
// Not this again...

    // it('should totally fail', function(){
    //   chai.expect(false).equals(true);
    // })

    it("should have a 'game' in the 'window'", function(){
      chai.expect(window.game).to.be.equal(game);
      chai.expect(game).to.be.an('object');
      chai.expect(game.board).to.exist;
      chai.expect(game.board).to.a('function');
    });

    it('should give me a big array as the board', function(){
      chai.expect(game.board()).to.be.an('array');
      // chai.expect(game.board().length).to.be.equal(8); // Refactored below
      chai.expect(game.board()).to.have.length(8);
    });
});
