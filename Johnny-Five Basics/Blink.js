var five = require("johnny-five");
var galileo = require("galileo-io");

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {

  var led = new five.Led(13);
  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});
