var five = require("johnny-five");
var galileo = require('galileo-io');
var board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {
  var temperature = new five.Temperature({
    controller: "TMP36",
    pin: "A0",
    freq: 1000
  });

  temperature.on("data", function(err, data) {
    console.log(data.celsius + "°C", data.fahrenheit + "°F");
  });
});
