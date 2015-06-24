var five = require('johnny-five');
var galileo = require('galileo-io');

var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  var barometer = new five.Barometer({
    controller: "BMP180",
    freq: 1000
  });

  barometer.on("change", function() {
    console.log("barometer");
    console.log("  pressure     : ", this.pressure);
    console.log("--------------------------------------");
  });
});
