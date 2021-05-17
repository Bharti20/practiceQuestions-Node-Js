//using string search() methord

var str = "hello world!";
var store = str.search("world");
console.log(store)



//using string search() methord with a regular expresion

var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
console.log(n)


//string replaced() method

var str = "nodeJs is a programing language"
var n = str.replace("nodeJs", "python")
console.log(n)