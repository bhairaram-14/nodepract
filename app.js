const express= require('express')

const app= express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/auth",require('./route.js'))

// app.get("/" ,(req,res)=>{
//    res.send("hello man");
// })

app.listen(9091,()=>{console.log("server started at port: 9091")})