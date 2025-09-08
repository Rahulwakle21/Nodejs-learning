const http = require('http')

const fs = require('fs')
 

const myServer = http.createServer((req,res)=>{

    const log =`${Date.now()} : ${req.url}  new Req Received\n` ;
    fs.appendFile('log.txt',log ,(err,data)=>{
       switch (req.url){
            case '/' : res.end("Server started With HOME Page")
            break;
            case '/about':res.end("Server started With ABOUT Page")
            break;
            default : res.end("404 Not Found");
       }
    } )
console.log("new req log")

})

myServer.listen(8000,()=> console.log("startedd"))