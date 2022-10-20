const service = require('./service.js')

const express = require('express');



const app = express();

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("home page")
})

app.post("/register", async (req, res) => {

    const { name, email, password, phoneno, role } = req.body;


    const user = {
        name, email, password, phoneno, role
    }

   // console.log(user)

    try {
        let data = await service.savedata(user);
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }



})

app.post("/login", async (req, res) => {

    try {



        let data = await (service.validate(req.body.email, req.body.password))
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }

})


app.post("/resetpassword", async (req, res) => {

    try {
        let data = await (service.resetPassword(req.body.email))
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }

})



app.post("/upadtepass", async (req, res) => {

    try {
        let data = await (service.updatePassword(req.body.email,req.body.password,req.body.newPassword))

        res.status(200).send(data);

    } catch (err) {
        res.status(400).send(err);
    }

})


app.all("*", (req, res) => {

    res.send("<h2>resource not found</h2>" + "<a href='/'>home page</a>")

})

app.listen(9090, () => {
    console.log("server started at port :9090")
})