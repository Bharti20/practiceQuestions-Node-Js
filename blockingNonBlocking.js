//Blocking Code 

// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");


//Non Blocking Code 

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
console.log("i am asyncronus")
