const mongoose = require('mongoose');
const Admin=require('../models/admin')
const express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config()
//connection
conn().catch(err => console.log(err));
async function conn() {
    await mongoose.connect(process.env.DBCONNECT);
}

//routes 
router.get('/', (req, res) => {
Admin.find()
.then((data)=>res.send(data))
.catch((err)=>res.send({"Error":"Error in data fetching"}))
})

//register (signup) create admin 
router.post('/',async(req, res) => {
    let b=req.body;
    let admin=await Admin.findOne({email:b.email})  
    if(!admin){
        let pw=await bcrypt.hash(b.password, saltRounds)
        let data={email:b.email,password:pw}
        const rec = new Admin(data);
        rec.save()
        .then(()=>{
            res.send({'status':1,'Response':'Record Saved'})          
        })
        .catch(err => { console.log(err); 
            res.send({'status':0,'Response':'Error In Insertion'})
        })
    }
    else
    res.send({'status':0,'Response':'Account Already Exist'})
})
//login
router.post('/login',async(req, res) => {
    let b=req.body;
    let admin=await Admin.findOne({email:b.email})  
    if(admin){
        let match=await bcrypt.compare(b.password,admin.password)
        if(match) {
            res.send({Response:'Login Successful', adminid:_id,status:1})
        }
        else
        res.send({Response:'Incorrect Password',status:0});
    }
    else
    res.send({Response:'Incorrect Email',status:0});
})

//deleteAll
router.delete('/', (req, res) => {
    Admin.deleteMany({})
    .then((data)=>res.send({'status':0,'Response':'Error In Deleting Records'})
)
    .catch((err)=>res.send({'status':1,'Response':'Records Deleted'}))
    })

module.exports = router;