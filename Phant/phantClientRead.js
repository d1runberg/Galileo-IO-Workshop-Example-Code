var Phant = require('phant-client').Phant
var phant = new Phant()

//use iri for 3rd party feeds
//var iri = 'https://data.sparkfun.com/streams/EJEaxjqyyMCn8Grjd5QW'

//use streamd for your personal feeds, where you have more data
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

phant.connect(iri, function(error, streamd) {
   setInterval(function() {
   phant.latest(streamd, function(error, rd) {
   if (error) {
      console.log("# error", error);
   }
   else if (rd === null) {
      console.log("+ eof");
   }
   else {
      console.log("+ got", rd);
   }
});
},10000);
});
