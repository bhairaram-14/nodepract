// const http= require("http");

const http = require('http')

const server= http.createServer((req,res)=>{
    //console.log(req)
    //console.log(res)
    if(req.url==='/')
   {
    res.write("welcome to my home page");
    res.end("\nrun ..............run")
   } 
   if(req.url==='/about')
   {
    res.end("here is short history but you can't see .....")
   }
    
    res.end(`
    <h1> Oops</h1>
    you are not welcomed...!!
    <a href="/"> back home</a>
    `)
})

server.listen(8080);