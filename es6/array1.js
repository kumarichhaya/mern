let colors=["red","pink","gren","yellow","purple"]
colors[2]="green"
console.log(colors)
//array methods 
colors.push("black")
colors.push("grey")
colors.unshift("white")
console.log(colors)
colors.pop()
colors.shift()
console.log(colors)
console.log(colors.length)
console.log(colors.at(3))
console.log(colors[2])
console.log(colors.indexOf('purple'))
colors.sort()
console.log(colors)
colors.reverse()
console.log(colors)
let d= colors.toString()
console.log(d)
let e= colors.join(' | ')
console.log(e)
console.log(colors)
colors.splice(2,3,"blue")
console.log(colors)
console.log(colors.slice(1,3))




