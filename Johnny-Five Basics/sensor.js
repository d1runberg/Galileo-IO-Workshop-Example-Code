var five = require("johnny-five");
var galileo = require("galileo-io");

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {

  var sensor = new five.Sensor("A0");
  // "slide" is an alias for "change", only prints when value changes!
  sensor.scale([0, 100]).on("data", function() {
    console.log("slide", this.value);
  });
});
