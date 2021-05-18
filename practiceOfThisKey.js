//using alone:- "this" keyword refe to the global object
console.log(this)   



//using in regular function:- this refers to the globle object
function sum(){   
    var add = 2+2
    console.log("sum of two no is. "+add)
    console.log(this)
}
sum()




// using in a method:- this refers to the owner object
const bharti = {
    name:"bharti kumari",
    course:"js",
    sum: function(){
        var add = 2+2
        console.log("sum of two no is. "+add)
        console.log(this)  
    }
}
bharti.sum()



// in function :- in strict mode this is undefind
"use strict"
function sum(){   
    var add = 2+2
    console.log("sum of two no is. "+add)
    console.log(this)  
}
sum()