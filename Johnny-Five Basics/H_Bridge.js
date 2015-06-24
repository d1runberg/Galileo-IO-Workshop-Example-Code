var five = require("johnny-five");
var galileo = require('galile-io');

 var board = new five.Board({
    io: new galileo()
});

board.on("ready", function() {
  var motor;
  
  motor = new five.Motor({
    pins: {
      pwm: 3,
      dir: 12
    },
    invertPWM: true
  });


  board.on("ready", function() {

    console.log("Motor: Forward");
    setTimeout(function () {
      motor.forward(255);
   }, 3000);

    console.log("motor: Brake!");
    motor.stop();

    console.log("motor: Reverse!");
    setTimeout(function () {
      motor.reverse(255);
   }, 3000);
   console.log("motor: brake!");
   motor.stop();

  });
