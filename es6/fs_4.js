const fs = require('node:fs');
let m="learning node js";
let src="text.txt"
let dest="content.txt"
fs.copyFile(src,dest,(err)=>{
    if(err)
        console.log("Error In Coping File")
    else
    console.log("File Copied Succesfully")
});
console.log(m)
