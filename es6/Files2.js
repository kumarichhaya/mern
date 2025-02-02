// const fs = require('fs');
// console.log("File Handing in Node Javascript")
// let fn="text.txt";
// let txt=fs.readFileSync(fn)
// console.log("Text From File"+txt)
// console.log("Reading From File")

// console.log(1)
// setTimeout(() => console.log("Hello Welcome to JS Batch"),3000)
// console.log(2)
// console.log(3)

const fs = require('fs');
console.log("File Handing in Node Javascript")
let fn="text.txt";

fs.readFile(fn,(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log("Text From File"+data)
})

fs.copyFile(fn,"text1.txt",(err)=>{
    if(err)
        console.log(err)
    else
    console.log('copied')
})
console.log("Reading From File")
console.log(2)
console.log(3)