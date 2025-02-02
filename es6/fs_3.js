const fs = require('node:fs');
let m="learning node js";
let src="text6.txt"

fs.readFile(src,(err,data)=>{
    if(err)
        console.log("File Not Found")
    else
    console.log(data.toString())
});

console.log(m)
