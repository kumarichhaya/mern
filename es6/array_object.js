Students=[
{name:'Navneet',course:'Mern',Batch:'Aug',Mode:'Offline'},
{name:'Tanveen',course:'Mern',Batch:'Aug',Mode:'Offline'},
{name:'Ajay',course:'Excel',Batch:'Aug',Mode:'Offline'},
]
for (student of Students){
		console.log(student)
	}
	console.log('text')
for (student of Students){
		for (s in student)
			console.log(`${s} : ${student[s]}`)
		console.log()
	}
	console.log('hi')
for (student of Students){
		console.log(`${student.name} enrolled in ${student.course} ${student.Batch} Batch`)
	}
