const fs = require('node:fs');
let m="learning node js";
let src="text6.txt"
k=fs.readFileSync(src);
console.log(k.toString())
console.log(m)
