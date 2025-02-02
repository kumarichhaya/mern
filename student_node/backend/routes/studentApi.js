const mongoose = require('mongoose');
const Student=require('../model/student')
const express = require('express')
var router = express.Router()
const img = require('./file_upload')
// const mail= require('./mailer')

require('dotenv').config()
//connection
conn().catch(err => console.log(err));
async function conn() {
    await mongoose.connect(process.env.DBCONNECT);
}

//routes 
//all 
router.get('/', (req, res) => {
Student.find().sort({date:-1})
.then((data)=>res.send(data))
.catch((err)=>res.send({"Error":"Error in data fetching"}))
})
//recent
router.get('/recent', (req, res) => {
Student.find({publish:true}).sort({date:-1}).limit(6)
.then((data)=>res.send(data))
.catch((err)=>res.send({"Error":"Error in data fetching"}))
})
// full student
router.get('/:id', (req, res) => {
  let id=req.params.id
  Student.findOne({_id:id})
  .then((data)=>res.send(data))
  .catch((err)=>res.send({"Error":"Error in data fetching"}))
  })
//by course
router.get('/course/:cid', (req, res) => {
let cid=req.params.cid
Student.find({course:cid,publish:true}).sort({date:-1})
.then((data)=>res.send(data))
.catch((err)=>res.send({"Error":"Error in data fetching"}))
})
router.post('/',img.upload.single('image'), (req, res) => {
    let b=req.body
    let image="localhost:3000/public/"+req.file.filename;
    let data={name:b.name,course:b.course,image:image,
        email:b.email,phone:b.phone
    }
    const rec = new Student(data);
    rec.save()
    .then(()=>{
      res.send('Record Saved')
    })
    .catch(err => { console.log(err); res.send('Error in Code')})
})
router.put('/:id', (req, res) => {
    let b=req.body;
    let data={name:b.name,course:b.course,image:image,
        email:b.email,phone:b.phone}
    Student.updateOne({_id:req.params.id},data)
    .then((data)=> res.send({"Success":"Record Updated"}))
    .catch((err)=>res.send({"Error":"Error in Record Updating"}))
    })
  
  router.delete('/:id', (req, res) => {
  Student.deleteOne({_id:req.params.id})
  .then((data)=>res.send({'status':1,'Response':'Record Deleted',Data:data})) //status response and data
  .catch((err)=>res.send({"Error":"Error in Record Deleteing",Err:err}))
  })
  
  //deleteAll
  router.delete('/', (req, res) => {
    Student.deleteMany({})
    .then((data)=>res.send({'status':1,'Response':'Record Deleted'}))
    .catch((err)=>res.send({'status':1,'Response':'Record Deleted'}))
    })

module.exports = router;