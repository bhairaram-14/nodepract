const mysql= require('mysql')

var con= mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Bhera@mysql",
    database: "demofornode"
})

con.connect((err)=>{
    if(err) throw err
    console.log("connnected")

    // var sql="create database demofornode"
    // con.query(sql,(err,res)=>{
    //     if(err) throw  err;
    //     console.log(   `database created:demofornode`)
    // })
  
    // sql="create table course_info( id  INT AUTO_INCREMENT PRIMARY KEY,  course_name varchar(20))";
    // con.query(sql,(err,res)=>{
    //     if(err) throw err;
    //     console.log("table created") 
    // })

    sql="show tables";
    con.query(sql,(err,res)=>{
        if(err) throw err;
        console.log(res) 
    })

    sql="desc course_info";
    con.query(sql,(err,res)=>{
        if(err) throw err;
        console.log(res) 
    })

    sql=" INSERT INTO course_info (course_name) VALUES ('javascript')";
  
    con.query(sql,(err,res)=>{
        if(err) throw err;
        console.log(res) 
    })
    sql=" SELECT * FROM course_info ";
  
    con.query(sql,(err,res)=>{
        if(err) throw err;
        console.log(res) 
    })
    

    
})
