var five = require('johnny-five');
var galileo = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  var both = new five.Multi({
    controller: "BMP180"
    freq:1000
  });

  both.on("data", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.temperature.celsius);
    console.log("  fahrenheit   : ", this.temperature.fahrenheit);
    console.log("  kelvin       : ", this.temperature.kelvin);
    console.log("--------------------------------------");

    console.log("barometer");
    console.log("  pressure     : ", this.barometer.pressure);
    console.log("--------------------------------------");
  });
});
