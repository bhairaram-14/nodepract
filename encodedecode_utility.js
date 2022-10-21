const bcrytpt = require('bcrypt')


// async function genratehash(password) {
//     return new Promise((resolve, reject) => {
//         bcrytpt.genSalt(12, async (err, salt) => {
//             if (err)
//                 reject(err);
//             else {
//                 bcrytpt.hash(password, salt, (err, hash) => {
//                     if (err)
//                         reject(err);
//                     else {
//                         resolve(hash);
//                     }

//                 });

//             }
//         });

//     });
// }




// async function compare(password, hash) {

//     return new Promise( (resolve, reject) => {
//         bcrytpt.compare(password, hash, async (err, res) => {
  
//                 console.log(res)

//             if (err)
//             {

//                 console.log(err)
//                 reject(err);
//             }
//              else if (!res)
//                 reject("password is not valid");
//             else
//                 resolve(res);
//         });

//     });

// }

//genratehash("hello").then((value)=>{console.log(value)})
//=============================== m-2 

async function genratehash(password) {
    return await bcrytpt.hash(password, 10)
}



async function compare(password, hash) {
    console.log(hash);

 return  await bcrytpt.compare(password, hash);

}

//testing===============================================

// async function fun() {
//     let password = "helloman";
//     const hash = await genratehash(password);
//     console.log("hash : "+hash)
//     console.log(await compare(password, hash))
// }
// fun()



module.exports={genratehash,compare}