const fs = require('node:fs');

let src="objects.js"
let dest="newobj.js"
fs.copyFileSync(src, dest)