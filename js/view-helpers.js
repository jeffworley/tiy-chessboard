console.log("Loaded view-helpers.js");
// TODO: Should probably live in `js/view-helpers.js` one day...
(function(globals){ // That damn IIFE again!
// Your code BELOW here...
  var view = globals.view = {
    current: function () {
      // Because the game board only corresponds to the `tbody` element...
      var $chessboard = jQuery('.chessboard tbody');
      // I always start variable names with `$` when they reference `jQuery.Collection` values

      // This looks strangely familiar... is that COPY-PASTA!?
      // TODO: Don't use COPY-PASTA!
      var gameboard = game.board();

      // You could also use nested `for` loops, but this is better...
      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){
          // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
          var $square = $chessboard
            .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
            .find('td').eq(file); // Get the `td` inside the `tr` for the `file`

          //console.log($square.get(), rank, file, piece);
          // Use the log, Luke!

          if (piece) { // Not _exactly_ what we discussed in class...
            // TODO: Convert `square` to class name(s)
            // TODO: Add class name(s) to `td` instead
            // To populate the representation of the board with pieces...
            $square.text(piece);
          } else {
            $square.text(' ');
          };

          $(function() {
            $("td:contains('P')").addClass('P');
            $("td:contains('R')").addClass('R');
            $("td:contains('N')").addClass('N');
            $("td:contains('B')").addClass('B');
            $("td:contains('Q')").addClass('Q');
            $("td:contains('K')").addClass('K');
            $("td:contains('p')").addClass('p');
            $("td:contains('r')").addClass('r');
            $("td:contains('n')").addClass('n');
            $("td:contains('b')").addClass('b');
            $("td:contains('q')").addClass('q');
            $("td:contains('k')").addClass('k');
            $("td:contains(' ')").removeClass("P");
            $("td:contains(' ')").removeClass("R");
            $("td:contains(' ')").removeClass("N");
            $("td:contains(' ')").removeClass("B");
            $("td:contains(' ')").removeClass("Q");
            $("td:contains(' ')").removeClass("K");
            $("td:contains(' ')").removeClass("p");
            $("td:contains(' ')").removeClass("r");
            $("td:contains(' ')").removeClass("n");
            $("td:contains(' ')").removeClass("b");
            $("td:contains(' ')").removeClass("q");
            $("td:contains(' ')").removeClass("k");
          });

        });
      });
    }
  };

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
