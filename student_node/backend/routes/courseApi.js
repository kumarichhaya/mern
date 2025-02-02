const mongoose = require('mongoose');
const Course=require('../model/course')
const express = require('express');
const course = require('../model/course');
var router = express.Router()
require('dotenv').config()
//connection 
conn().catch(err => console.log(err));
async function conn() {
    await mongoose.connect(process.env.DBCONNECT);
}
//routes 
router.get('/', (req, res) => {
    Course.find()
    .then((data)=>res.send(data))
    .catch((err)=>res.send({"Error":"Error in data fetching"}))
    })
    router.post('/', (req, res) => {
        let b=req.body
        let data={name:b.name,duration:b.duration,fee:b.fee}
        const rec = new Course(data);
        rec.save()
        .then(()=>res.send({'status':1,'Response':'Record Saved'}))
        .catch(err => { console.log(err); res.send({'status':0,'Response':'Error In Insertion'})})
    })
    router.put('/:id', (req, res) => {
        let b=req.body;
        let data={name:b.name,duration:b.duration,fee:b.fee}
      Course.updateOne({_id:req.params.id},data)
        .then((data)=> res.send({'status':1,'Response':'Record Updated'}))
        .catch((err)=> res.send({'status':0,'Response':'Error In Updating Record'}))
        })
        router.delete('/:id', (req, res) => {
            Course.deleteOne({_id:req.params.id})
            .then((data)=>res.send({'status':1,'Response':'Record Deleted'}))
            .catch((err)=>res.send({'status':0,'Response':'Error In Deleting Record'}))
            })
            
            //deleteAll
            router.delete('/', (req, res) => {
              Course.deleteMany({})
              .then((data)=>res.send({'status':1,'Response':'Records Deleted'}))
              .catch((err)=>res.send({'status':0,'Response':'Error In Deleting Records'}))
              })
            
            
            module.exports = router;