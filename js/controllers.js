//Credit for this logic goes to jmcreaseman.  I had originally started down a path that would have changed the piece locations within the same board array and hope to still work independently to reach that goal.

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

  var cmCounter = 0;
  var totalBoardStates = 9;


  // Controller for "next move"...
  jQuery("#step-forward").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the step-forward button!!!")
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    //game.next();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    var curID = "#boardState-" + cmCounter;
    var nextID = curID;

    if (cmCounter < totalBoardStates) {
      cmCounter = cmCounter + 1;
      nextID = "#boardState-" + cmCounter;

      $(curID).addClass("notCurMove");
      $(nextID).removeClass("notCurMove");
    }

  });

  // Controller for "previous move"...
  jQuery("#step-back").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the step-back button!!!")
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    //game.prev();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`

    var curID = "#boardState-" + cmCounter;
    var prevID = curID;

    if (cmCounter > 0) {
      cmCounter = cmCounter - 1;
      prevID = "#boardState-" + cmCounter;

      $(curID).addClass("notCurMove");
      $(prevID).removeClass("notCurMove");
    }

  });

  // Controller for "fast-forward"...
  jQuery("#fast-forward").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the fast-forward button!!!")
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    //game.end();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`

    $("#boardState-0").addClass("notCurMove");
    $("#boardState-1").addClass("notCurMove");
    $("#boardState-2").addClass("notCurMove");
    $("#boardState-3").addClass("notCurMove");
    $("#boardState-4").addClass("notCurMove");
    $("#boardState-5").addClass("notCurMove");
    $("#boardState-6").addClass("notCurMove");
    $("#boardState-7").addClass("notCurMove");
    $("#boardState-8").addClass("notCurMove");
    $("#boardState-9").removeClass("notCurMove");

  });

  // Controller for anything else...
  jQuery("#rewind").on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("clicked the reset button!!!")
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    //game.reset();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`

    $("#boardState-0").removeClass("notCurMove");
    $("#boardState-1").addClass("notCurMove");
    $("#boardState-2").addClass("notCurMove");
    $("#boardState-3").addClass("notCurMove");
    $("#boardState-4").addClass("notCurMove");
    $("#boardState-5").addClass("notCurMove");
    $("#boardState-6").addClass("notCurMove");
    $("#boardState-7").addClass("notCurMove");
    $("#boardState-8").addClass("notCurMove");
    $("#boardState-9").addClass("notCurMove");

  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
