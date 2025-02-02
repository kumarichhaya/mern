
let colors=["red","pink","green","yellow","purple","black","blue"]

colors.forEach((c)=>console.log(c))

let clr1=colors.map((c)=>c.toUpperCase())
console.log(clr1)

let clr2=clr1.filter((c)=>c.length>4)
console.log(clr2)

let clr3=clr1.filter((c)=>c.includes('E'))
console.log(clr3)
