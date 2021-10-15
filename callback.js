function firstN(n, callback){
    console.log(n, callback())
    father()
}

function surname(){
    return "kumari"
}

function father(){
    setTimeout(()=>console.log("mahendra"), 2000)
}

firstN("Bharti", surname)
