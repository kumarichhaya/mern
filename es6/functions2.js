const greet=function (){
console.log("Hello Welcome to JS Batch")
}

const avg=function (x,y,z){
	return (x+y+z)/3
}

const max=function (x,y,z){
	return (x>y && x>z)?x:(y>z)?y:z;
}

const min=function (x,y,z){
	return (x<y && x<z)?x:(y<z)?y:z;
}

let x=67, y=90, z=90
greet()
console.log(avg(x,y,z))
console.log(max(x,y,z))
console.log(min(x,y,z))
