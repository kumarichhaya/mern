
const greet= () => console.log("Hello Welcome to JS Batch")
const avg= (x,y,z) => (x+y+z)/3
const max= (x,y,z) => (x>y && x>z)?x:(y>z)?y:z;
const min= (x,y,z) =>(x<y && x<z)?x:(y<z)?y:z;
const mul= (x,y,z)=> x*y*z

module.exports.greet=greet
module.exports.avg=avg
module.exports.min=min
module.exports.max=max
module.exports.mul=mul