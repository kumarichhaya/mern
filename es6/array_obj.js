students=[
{
name:'Navneet',
course:['JS','React','Node'],
doj:{month:'Aug',year:'2024'},
duration:4.5,
fee:12000,
mode:'Offline',
active:false
},
{
name:'Tanveen',
course:['JS','React','Node'],
doj:{month:'July',year:'2024'},
duration:5.0,
fee:13000,
mode:'Online',
active:true
},
]

//console.log(students)
// for (student of students){
// 		for (s in student)
// 			console.log(`${s} : ${student[s]}`)
// 	}

for (student of students){
if(!student.active){
console.log(`Name : ${student.name}`)
console.log(`Course : ${student.course}`)
console.log(`Duration : ${student.duration}`)
console.log(`Doj : ${student.doj.month}/${student.doj.year}`)
console.log(`Fee : ${student.fee}`)
console.log(`Mode : ${student.mode}`)
console.log()
}
}
