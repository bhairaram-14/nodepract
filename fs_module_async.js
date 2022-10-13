const {readFile,writeFile}=require('fs')

const first=readFile('./content/first.txt','utf8',(err,result)=>{

    if(err){
        console.log("error ")
        return;
    }
    console.log(result)
})

readFile('./content/first.txt','utf8',(err,result)=>{

    if(err){
        console.log("error ")
        return;
    }
    const first=result

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
          console.log("error in reading second file")
          return
        }
        const second=result;

        writeFile("./content/result_async.txt",`${first}\n${second}`,(err,res)=>{
            if(err)
            {
                console.log(err)
                return ;

            }
            console.log(res)
        })
    })

    
})