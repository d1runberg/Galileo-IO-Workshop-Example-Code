var five = require("johnny-five");
var galile = require('galileo-io');

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  // Assuming a button is attached to pin 9
  this.pinMode(9, five.Pin.INPUT);
  //read pin 9 for button press
  this.digitalRead(9, function(value) {
    //console.log is similar to serial.println()
    console.log(value);
  });
});
