// let readlineSync=require("readline-sync")
// let num = readlineSync.question("enter the number")
// var i =1
// var count=0
// while(i<=num){
//     if(num%i==0){
//         count=count+1
//     }i++
// }if(count==2){
//     console.log("prime number")
// }else{
//     console.log("not prime")
// }

// let readlineSync=require("readline-sync")
// let num=readlineSync.question("enter the number")
// let list = [1,2,3,4]
// var store = list.length
// var i= store-num
// if(num>store){
//     console.log("input invalid")
// }else{
//     console.log(list[i])
// }

// let readlineSync=require("readline-sync")
// let num=readlineSync.question("enter the number")
// let list = [1,2,3,4]
// var i=0
// while(i<num){
//     console.log(list[i])
//     i++
// }

var list= ["bharti","neha", "ravina", "bharti", "sarmistha", "bharti", "neha"]
var i=0
var list2=[]
while(i<list.length){
    var j=0
    var count =0
    const pass = "pass"
    while(j<list.length){
        if(list[i]==list[j]){
            count=count+1

        }
        j++
    }if(list2.length<2){
        list2.push(count) 
    }
    i++
    
}
console.log(list2)
