var a =6
var b =8
let prom = new Promise((resolve, reject)=>{
    if(a>b){
        resolve("a is greater")
    
    }else{
        reject("false")
    }
})
prom.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})