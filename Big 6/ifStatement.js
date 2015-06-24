var five = require("johnny-five");
var galileo = require('galileo-io');

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  // Assuming a sensor is attached to pin "A0"
  this.pinMode(0, five.Pin.ANALOG);
  this.analogRead(0, function(voltage) {
     if(voltage>512){
        console.log("High!");
     }
     else{
        console.log("Low!");
     }
  });
});
