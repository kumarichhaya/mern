text="ECMA_SCRIPT"
console.log(text)
console.log(text.length)

console.log("For Loop")
for (let x=0; x<text.length; x++) {
	console.log(text[x])
}
console.log("While Loop")

let i=0;
while(i<text.length){
		console.log(text[i])
		i++; }

console.log("for in Loop")
for(let y in text )
	console.log(text[y])

console.log("for of Loop")
for(let n of text )
	console.log(n)