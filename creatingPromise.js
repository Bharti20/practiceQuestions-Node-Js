let done = true

const isDoneYet = new Promise((resolve, reject ) => {
    if(done){
        const workDone = " i have have made somthing"
        resolve(workDone)
    }else{
        const why = "still working on somthing"
        reject(why)
    }

})