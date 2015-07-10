//single fade in and then out

var five = require("johnny-five");
var galileo = require("galileo-io");
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {

  var led = new five.Led(11);

  led.fadeIn();

  // Toggle the led after 5 seconds (shown in ms)
  this.wait(2000, function() {
    led.fadeOut();
  });
});
