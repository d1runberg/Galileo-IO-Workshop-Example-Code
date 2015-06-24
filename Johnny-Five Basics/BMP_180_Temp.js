var five = require('johnny-five');
var galileo = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  var temperature = new five.Temperature({
    controller: "BMP180",
    freq: 1000
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});
