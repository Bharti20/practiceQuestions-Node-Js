const server = http = require("http")

const server = http.createServer(function (request, response) {
    if(req.url = "/"){
    console.log("hello, welcome to you...")
    }else if(req.url = "about"){
        console.log("  about side ....")
    }
    
});

server.listen(3000 ,()=>{
    console.log("server is running on port no 3000")
});
