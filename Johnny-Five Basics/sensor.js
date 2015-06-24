var five = require("johnny-five");
var galileo = require("galileo-io");

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {

  var potentiometer = new five.Sensor("A0");
  // "slide" is an alias for "change", only prints when value changes!
  potentiometer.scale([0, 100]).on("data", function() {
    console.log("slide", this.value);
  });
});
