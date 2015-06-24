var five = require("johnny-five");
var galileo = require("galileo-io");

var board = new five.Board({
   io: new galileo()
});

var Phant = require('phant-client').Phant;
var phant = new Phant();


//var iri = 'https://data.sparkfun.com/streams/EJEaxjqyyMCn8Grjd5QW'
var streamd = {
title: "Office Temperature and Pressure",
description: undefined,
fields: "temperature,pressure",
outputUrl: "https://data.sparkfun.com/output/YGVODw603OumAvagVaWN",
inputUrl: "https://data.sparkfun.com/input/YGVODw603OumAvagVaWN",
manageUrl: "https://data.sparkfun.com/streams/YGVODw603OumAvagVaWN",
publicKey: "YGVODw603OumAvagVaWN",
privateKey: "Rbv0n4Xq10I12VZeoZbz",
deleteKey: "bLNz94aRozhqXlkZAk6v"
}

board.on("ready",function(){

   var both = new five.Multi({
     controller: "BMP180"
   });

   phant.connect(streamd, function(error, streamd) {
    //console.log(streamd);
    //console.log(streamd);
      setInterval(function(){
         var add_callback = function(error) {
           if (error) {
               console.log("+ add-error", error)
           } else {
               console.log("+ add ok")
           }
      }
      //var random = Math.random();
      //post a random number to number field every 10 seconds.
      phant.add(streamd,{temperature: this.temperature.fahrenheit, pressure: this.barometer.pressure}, add_callback);
      },10000);
   });
});
