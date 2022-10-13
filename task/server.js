const express= require('express')

const app= express();
app.get('/home',(req,res)=>{

    res.send("Hello Bheraram");
})
app.listen(9090,()=>console.log("server is running on port :9090"))

