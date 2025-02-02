const fs = require('node:fs');

let src="file2.js"
let dest="new_file.js"
fs.renameSync(src, dest)