const fs = require('fs');
r=Math.floor(Math.random()*20)+1
dir="ABCD"+r;
let fn="text.txt";
let nf=dir+"/content.txt";
fs.mkdir(dir,(e)=>{
    if(!e){
        fs.copyFile(fn,nf,(er)=>{
            if(!er){
                fs.readFile(nf,(err,txt)=>{
                    if(!err)
                        console.log(txt.length+" Char Copied");
                    else
                        console.log(err)            
                })
            }
            else
            console.log(er)    
        })
    }
    else
    console.log(e)       
})