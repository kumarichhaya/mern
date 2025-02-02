function greet(){
console.log("Hello Welcome to JS Batch")
}

function avg(x,y,z){
	return (x+y+z)/3
}

function max(x,y,z){
	return (x>y && x>z)?x:(y>z)?y:z;
}

function min(x,y,z){
	return (x<y && x<z)?x:(y<z)?y:z;
}

let x=67, y=90, z=90
greet()
console.log(avg(x,y,z))
console.log(max(x,y,z))
console.log(min(x,y,z))
