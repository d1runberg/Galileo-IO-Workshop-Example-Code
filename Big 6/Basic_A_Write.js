var five = require("johnny-five");
var galileo = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  // Assuming an Led is attached to pin 9,
  // this will turn it on at full brightness
  // PWM is the mode used to write ANALOG
  // signals to a digital pin
  this.pinMode(9, five.Pin.PWM);

  this.wait(1000,function(){
     this.analogWrite(9, 255);
  });
  this.wait(1000,function(){
     this.analogWrite(9,100);
  });
  this.wait(1000,function(){
     this.analogWrite(9,25);
  });
});
