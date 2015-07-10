var five = require("johnny-five"),
  board, lcd;
var galileo = require('galileo-io');

board = new five.Board({
   io: new galileo()
});

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [8, 9, 4, 5, 6, 7],
    backlight: 10,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });


  // Line 1: Hi rmurphey & hgstrp!
  lcd.clear().print("Hello World");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  // lcd.print("I").write(7).print(" johnny-five");
  // can now be written as:
  lcd.print("Goodbye Austin");



  this.repl.inject({
    lcd: lcd
    //try lcd.clear().print("add your 16 char string here");
   }
  });
});
