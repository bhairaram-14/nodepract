const os=require('os')

//console.log(module)
//console.log(oos);

console.log(os.homedir())
const user=os.userInfo()
//console.log(user)


console.log(`system ${os.type(), os.release()} uptime  is ${os.uptime()/60/60}  seconds`)
const currentos={

    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freememory: os.freemem()

}

console.log(currentos)

//console.log(user)