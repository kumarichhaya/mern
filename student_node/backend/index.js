const express = require('express')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const Course =require('./routes/courseApi')
const Student =require('./routes/studentApi')




app.use('/course',Course)
app.use('/student',Student)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
