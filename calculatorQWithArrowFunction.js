
const sum = (num, num2) => {
    let add = num+num2
    return add 
}

const substract= (num, num2) =>{
    let sub = num-num2
    return sub
}

const multiply = (num, num2) => {
    let mul = num*num2
    return mul
}

let readlineSync = require("readline-sync")
let num = readlineSync.question("enter the first number----")
let number = parseInt(num)
let num2 = readlineSync.question("enter the second number ----")
let number2 = parseInt(num2)
let opretor = readlineSync.question("enter the opretor----")
const calculator = (opretor)=>{
    if(opretor=="+"){
        console.log(sum(number, number2))
    }else if (opretor=="-"){
        console.log(substract(number, number2))
    }else{
        console.log(multiply(number, number2))
    }

}
calculator(opretor)