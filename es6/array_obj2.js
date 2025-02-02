Students=[
    {name:'Navneet',course:'Mern',Batch:'Aug',Mode:'Offline'},
    {name:'Tanveen',course:'Mern',Batch:'Aug',Mode:'Offline'},
    {name:'Ajay',course:'Excel',Batch:'Aug',Mode:'Online'},
    {name:'Karan',course:'Excel',Batch:'Aug',Mode:'Online'},
    {name:'Mandeep',course:'Mern',Batch:'July',Mode:'Offline'},
]
// for (s of Students){
// console.log(`${s.name} enrolled in ${s.course} (${s.Mode}) ${s.Batch} Batch`)
// }
console.log('Offline ')
let st_m=Students.filter((s)=>s.Mode=='Offline')
st_m.forEach((s,i)=>console.log(` ${i} - ${s.name} enrolled in ${s.course} (${s.Mode}) ${s.Batch} Batch`))

console.log('Excel ')
let st_c=Students.filter((s)=>s.course=='Excel')
st_c.forEach((s,i)=>console.log(` ${i} - ${s.name} enrolled in ${s.course} (${s.Mode}) ${s.Batch} Batch`))

console.log('Offline - Aug Batch ')
let st_mb=Students.filter((s)=>s.Mode=='Offline' && s.Batch=='Aug')
st_mb.forEach((s,i)=>console.log(` ${i} - ${s.name} enrolled in ${s.course} (${s.Mode}) ${s.Batch} Batch`))

let st_mb1=Students.find((s)=>s.Mode=='Offline' && s.Batch=='Aug')
console.log(st_mb1)

let st_mb2=Students.findIndex((s)=>s.Mode=='Offline' && s.Batch=='Aug')
console.log(st_mb2)
