const mongoose = require('mongoose');
const Category=require('../models/category')
const express = require('express');
var router = express.Router()

require('dotenv').config()
//connection
conn().catch(err => console.log(err));
async function conn() {
    await mongoose.connect(process.env.DBCONNECT);
}

//routes 
router.get('/', (req, res) => {
Category.find()
.then((data)=>res.send(data))
.catch((err)=>res.send({"Error":"Error in data fetching"}))
})

router.post('/', (req, res) => {
    let b=req.body
    let data={category:b.category,icon:b.icon,short_desc:b.short_desc}
    const rec = new Category(data);
    rec.save()
    .then(()=>res.send({'status':1,'Response':'Record Saved'}))
    .catch(err => { console.log(err); res.send({'status':0,'Response':'Error In Insertion'})})
})

router.put('/:id', (req, res) => {
  let b=req.body;
  let data={category:b.category,icon:b.icon,short_desc:b.short_desc}
Category.updateOne({_id:req.params.id},data)
  .then((data)=> res.send({'status':1,'Response':'Record Updated'}))
  .catch((err)=> res.send({'status':0,'Response':'Error In Updating Record'}))
  })

router.delete('/:id', (req, res) => {
Category.deleteOne({_id:req.params.id})
.then((data)=>res.send({'status':1,'Response':'Record Deleted'}))
.catch((err)=>res.send({'status':0,'Response':'Error In Deleting Record'}))
})

//deleteAll
router.delete('/', (req, res) => {
  Category.deleteMany({})
  .then((data)=>res.send({'status':1,'Response':'Records Deleted'}))
  .catch((err)=>res.send({'status':0,'Response':'Error In Deleting Records'}))
  })


module.exports = router;