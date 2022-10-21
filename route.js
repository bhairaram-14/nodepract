const router=require('express').Router()

const controller=require("./controller.js")

router.post("/register", controller.register)
router.post("/login",controller.login)
router.post("/reset", controller.reset)
router.post("/update",controller.update)


router.all("*",controller.all)



module.exports=router