let readlineSync=require("readline-sync")
let num=readlineSync.question("enter a number----")
switch(num%2==0){
    case true:
        console.log("even")
        break;
    default:
        console.log("odd")
}   