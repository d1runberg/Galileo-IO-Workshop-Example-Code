var five = require("johnny-five");
var galileo = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

//start function after board is "ready", ready means after it runs internal setup
board.on("ready", function() {
  // Assuming an Led is attached to pin 13
  this.pinMode(13, five.Pin.OUTPUT);

//LED on for 1 second
     this.wait(1000,function(){
        this.digitalWrite(13, 1);
     });

     // Turn it off...
     this.wait(1000, function() {
         this.digitalWrite(13, 0);
      });
});
