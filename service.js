const db= require('./db.js')
const bcrypt=require('./encodedecode_utility.js')

const crypto=require('crypto');


async function fetchDataByEmail(email) {
    return new Promise(async (resolve, reject) => {

        try {
            const connection = await db.getConnection();

            let sql = "select name, email, phoneno, role from user_auth where email="+`"${email}"`;

            let result = await db.excuteQuery(sql, connection);
            if(result.length===0)
            reject("info not found in database");

             await db.closeConnection(connection);

            resolve(result)


        } catch (err) {

            reject(err);
        }

    })

}

async function fetchPasswordByEmail(email) {
    return new Promise(async (resolve, reject) => {

        try {
           const connection = await db.getConnection();

            let sql = "select password from user_auth where email="+`"${email}"`;
            let result = await db.excuteQuery(sql, connection);
            if(result.length===0)
            reject("info not found in database");

            await db.closeConnection(connection);

            resolve(result)


        } catch (err) {

            reject(err);
        }

    })

}

async function fetchNameByEmail(email) {
    return new Promise(async (resolve, reject) => {

        try {
            const connection = await db.getConnection();

            let sql = "select name from user_auth where email="+`"${email}"`;

            let result = await db.excuteQuery(sql, connection);
              if(result.length===0)
               reject("info not found in database");

             await db.closeConnection(connection);

            resolve(result)


        } catch (err) {

            reject(err);
        }

    })

}


async function savedata(user){
    return new Promise(async (resolve, reject) => {

        
        try {
           
            const hash= await bcrypt.genratehash(user.password);          
           
            let sql = `insert into user_auth (name, email, password, phoneno, role) Values("${user.name}","${user.email}","${hash}","${user.phoneno}","${user.role}")`;
           
            const connection = await db.getConnection();
            let result = await db.excuteQuery(sql, connection);
            result=fetchDataByEmail(user.email)
            const flag = await db.closeConnection(connection);
           
            resolve(result);

        } catch (err) {

            reject(err);
        }

    })
}


async function validate(email,password)
{   return new Promise(async (resolve, reject) => {

    try {
        
     let result = await fetchPasswordByEmail(email);
     
      result=result[0].password
  
     if(await bcrypt.compare( password, result))
       {
        resolve(await fetchDataByEmail(email))
        
       }

     else 
        reject("entered password is wrong")  

    } catch (err) {

        reject(err);
    }

})

}


async function resetPassword(email){
    return new Promise(async (resolve, reject) => {

        try {
            const connection = await db.getConnection();

             let result =await fetchPasswordByEmail(email);
             

            var newPassword=crypto.randomBytes(20).toString('hex').substring(1,8)
           
           
            const  hash= await bcrypt.genratehash(newPassword);

            let sql = `UPDATE user_auth SET password = "${hash}" WHERE email="${email}"`;


             result = await db.excuteQuery(sql, connection);
             result= await fetchPasswordByEmail(email);

             await db.closeConnection(connection);
    

            resolve("your pass word is : "+newPassword+" \n please update your password using update api")
   


        } catch (err) {

            reject(err);
        }

    })
}


async  function updatePassword(email,password,newPassword)
{
 return new Promise(async (resolve,reject)=>{
    try {
        const connection = await db.getConnection();


        let result =await fetchPasswordByEmail(email);
        if(!await bcrypt.compare(password,result[0].password))
            reject("please enter correct password......") 
           

        const hash= await bcrypt.genratehash(newPassword);

        let sql = `UPDATE user_auth SET password = "${hash}" WHERE email="${email}"`;

        result = await db.excuteQuery(sql, connection);
        
        await db.closeConnection(connection);

        resolve(await fetchDataByEmail(email));

    } catch (err) {

        reject(err);
    }

})
}




module.exports={savedata,validate,resetPassword,updatePassword}