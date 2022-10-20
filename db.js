const mysql = require('mysql')



async function createConnctions()
{
    const config = {
        host: "localhost",
        user: "root",
        password: "Bhera@mysql",
        database: "demofornode"
    }

return new Promise((resolve ,reject)=>{
    resolve(mysql.createConnection(config));
}) 
}


async function getConnection() {

    const connection=await createConnctions();

    return new Promise((resolve, reject) => {
        connection.connect((err)=>{

            if(!err)
            {
               resolve(connection);
            }
            else
            {
                reject("connection failed");
            }

        })
    });
}




async function excuteQuery(sql,connection){


    return new Promise((resolve,reject)=>{
         
        connection.query(sql,(err,res)=>{
            if(err){
                reject("error in sql "+err)
            }
            else
            {
                resolve(res);
            }
        })
        
    })
}

async function closeConnection(connection)
{
    return new Promise((resolve,reject)=>{
     connection.end((err)=>{
        if(err)
         reject("something went wrong in closeConnection");
        else
         resolve("connection closed.........");
     });

    });
}

module.exports={getConnection, excuteQuery, closeConnection};