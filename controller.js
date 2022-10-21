const service = require('./service.js')


const register = async(req, res) => {

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


}

 const login= async (req,res) => {

    try {



        let data = await (service.validate(req.body.email, req.body.password))
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }


}

const reset= async (req,res)=>{

    try {
        let data = await (service.resetPassword(req.body.email))
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }

}

const update = async (req,res)=>{
    try {
        let data = await (service.updatePassword(req.body.email,req.body.password,req.body.newPassword))

        res.status(200).send(data);

    } catch (err) {
        res.status(400).send(err);
    }

}


const all = async (req, res)=>{
    res.status(404).send("resourse does not exists.......");
}


module.exports={register,login,reset,update,all};


// app.all("*", (req, res) => {

//     res.send("<h2>resource not found</h2>" + "<a href='/'>home page</a>")

// })

// app.listen(9090, () => {
//     console.log("server started at port :9090")
// })