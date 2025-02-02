const fs = require('fs');
console.log("File Handing in Node Javascript")
r=Math.floor(Math.random()*20)+1
dir="ABCD"+r;
fs.mkdirSync(dir)
let fn="text.txt";
let nf=dir+"/content.txt";
let nf1=dir+"/sample.txt";
let nf2=dir+"/demo.txt";
fs.copyFileSync(fn,nf)
fs.copyFileSync(fn,nf2)
console.log("Coping Content Form Text File")
fs.renameSync(nf,nf1)
console.log("Rename  Text File")
fs.unlinkSync(nf2);




// let txt=fs.readFileSync(fn)
// console.log("Text From File"+txt)