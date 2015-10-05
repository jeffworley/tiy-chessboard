console.log("Loaded controllers.js");
(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  /*document.querySelector(SELECTOR)
    .addEventListener(TYPE, CALLBACK);
  // AKA
  jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }*/


  // Controller for "next move"...
  // To make the representation of the board match the multidimensional array that is the board at opening state...
  view.current();

  jQuery("#forward").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the step-forward button!!!");
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    game.next();
    console.log(game.tracer());
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    // To refresh the representation of the board now that a move has been made...
    view.current();

  });

  // Controller for "previous move"...
  jQuery("#back").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the step-back button!!!");
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    game.prev();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    // To update the representation...
    view.current();


  });

  // Controller for "fast-forward"...
  jQuery("#fast-forward").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the fast-forward button!!!");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    game.end();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    // To update the respresentation...
    view.current();

  });

  // Controller for anything else...
  jQuery("#rewind").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the reset button!!!")
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    game.reset();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    // To update the representation...
    view.current();

  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
