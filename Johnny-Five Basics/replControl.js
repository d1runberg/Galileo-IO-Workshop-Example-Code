var five = require("johnny-five");
var galile0 = require('galileo-io');
var board = new five.Board(
   io: new galileo()
);

board.on("ready", function() {
  /*
    Initialize pin 13, which
    controls the built-in LED
  */
  var led = new five.Led(13);

  /*
    Injecting object into the REPL
    allow access while the program
    is running.

    Try these in the REPL:

    led.on();
    led.off();
    led.blink();

    (One at a time to see each action)
  */
  this.repl.inject({
    led: led
  });
});
