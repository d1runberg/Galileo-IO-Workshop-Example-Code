var five = require("johnny-five");
var galileo = require("galileo-io");

var board = new five.Board({
   io: new galileo()
});

var Phant = require('phant-client').Phant;
var phant = new Phant();


//var iri = 'https://data.sparkfun.com/streams/EJEaxjqyyMCn8Grjd5QW'
var streamd = {
title: "Galileo_Feed",
description: undefined,
fields: "text,number",
outputUrl: "https://data.sparkfun.com/output/EJEaxjqyyMCn8Grjd5QW",
inputUrl: "https://data.sparkfun.com/input/EJEaxjqyyMCn8Grjd5QW",
manageUrl: "https://data.sparkfun.com/streams/EJEaxjqyyMCn8Grjd5QW",
publicKey: "EJEaxjqyyMCn8Grjd5QW",
privateKey: "dqM6vpdrr5sb61NADy9z",
deleteKey: "g32py4dqqxS3jJ7YEv4z"
}

board.on("ready",function(){
   var val;

   var slider = new five.Sensor("A0");
   // "slide" is an alias for "change", only prints when value changes!
   slider.scale([0, 100]).on("data", function() {
     val = this.value);
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
      phant.add(streamd,{number: val, text: "From a Galileo using Node.js"}, add_callback);
      },10000);
   });
});
