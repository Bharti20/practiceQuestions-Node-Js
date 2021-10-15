function first (callback) {
    console.log(1)
    callback()
}

function second () {
    console.log(2)
    
}

function third () {
    console.log(3)
    second()
}

first(third)






