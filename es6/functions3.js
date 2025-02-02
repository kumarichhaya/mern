// arrow functions
const greet= () => console.log("Hello Welcome to JS Batch")
const avg= (x,y,z) => (x+y+z)/3
const max= (x,y,z) => (x>y && x>z)?x:(y>z)?y:z;
const min= (x,y,z) =>(x<y && x<z)?x:(y<z)?y:z;
const mul= (x,y,z)=> x*y*z
//   ()=>

let x=67, y=90, z=90
greet()
console.log(avg(x,y,z))
console.log(max(x,y,z))
console.log(min(x,y,z))
console.log(mul(x,y,z))