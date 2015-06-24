var five = require("johnny-five");
var galile = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  var anode = new five.Led.RGB({
    pins: {
      red: 3,
      green: 5,
      blue: 6
    },
    isAnode: true
  });

  // Add led to REPL (optional)
  this.repl.inject({
    anode: anode
  });

  // Turn it on and set the initial color
  anode.on();
  anode.color("#FF0000");
  anode.blink(1000);
});
