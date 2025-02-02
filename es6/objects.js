course={title:'Mern',duration:'4Mth',fee:10000,
topics:['mongo','node','express','react']}

console.log(course)
console.log(course.title)
console.log(course.topics)

for (x in course)
	console.log(`${x} : ${course[x]}`)

console.log(`${course.title} Duration is ${course.duration} & its cost Rs. ${course.fee}`)