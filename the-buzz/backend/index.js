const express = require('express')
var cors = require('cors')

const bodyParser = require('body-parser')
const app = express()
app.use(cors({  origin: '*',}))

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))


require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const Admin=require('./routes/adminApi')
const Category=require('./routes/categoryApi')
const User=require('./routes/userApi')
const Article=require('./routes/articleApi')

app.use('/admin',Admin)
app.use('/user',User)
app.use('/category',Category)
app.use('/article',Article)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
