// require the johnny-five package
var five = require("johnny-five");
// require the galileo-io package
var galileo = require('galileo-io');
//define the board with the io setup as a galileo
var board = new five.Board({
   io: new galileo()
});

//start function after board is "ready", ready means after it runs internal setup
board.on("ready", function() {
  // Assuming an Led is attached to pin 13, this will turn it on
  this.pinMode(13, five.Pin.OUTPUT);
  //1 is HIGH and 0 is LOW
  this.digitalWrite(13, 1);
});
