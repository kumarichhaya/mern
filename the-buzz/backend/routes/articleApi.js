const mongoose = require("mongoose");
const Article = require("../models/article");
const express = require("express");
var router = express.Router();
const img = require("./file_upload");
const mail = require("./mailer");

require("dotenv").config();
//connection
conn().catch((err) => console.log(err));
async function conn() {
  await mongoose.connect(process.env.DBCONNECT);
}

//routes
//all
router.get("/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: "Error in data fetching" }));
});
//recent
router.get("/recent", (req, res) => {
  Article.find({ publish: true })
    .sort({ date: -1 })
    .limit(6)
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: "Error in data fetching" }));
});
// full article
router.get("/:id", (req, res) => {
  let id = req.params.id;
  Article.findOne({ _id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: "Error in data fetching" }));
});
//by category
router.get("/category/:cid", (req, res) => {
  let cid = req.params.cid;
  Article.find({ category: cid, publish: true })
    .sort({ date: -1 })
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: "Error in data fetching" }));
});
//by user
router.get("/user/:uid", (req, res) => {
  let uid = req.params.uid;
  Article.find({ user: uid })
    .sort({ date: -1 })
    .then((data) => res.send(data))
    .catch((err) =>
      res.send({ Response: "Error in data fetching", status: 0 })
    );
});

router.post("/", img.upload.single("image"), (req, res) => {
  let b = req.body;
  let image = "localhost:3000/public/" + req.file.filename;
  let data = {
    title: b.title,
    category: b.category,
    image: image,
    content: b.content,
    user: b.user,
  };
  const rec = new Article(data);
  rec
    .save()
    .then(() => {
      let msg = `Article With ${b.title}  Posted By User (${
        b.user
      }) at ${Date.now()}</p> `;
      let data = {
        rcvr: "gagandeep.a24@gmail.com",
        sub: "New Article Entry",
        body: msg,
      };
      mail.main(data).catch(console.error);
      res.send({ Response: "Record Saved", status: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.send("Error in Code");
    });
});
router.patch("/image/:id", img.upload.single("image"), (req, res) => {
  let image = "localhost:3000/public/" + req.file.filename;
  let id = req.params.id;
  Article.updateOne({ _id: id }, { image: image })
    .then((data) => res.send({ Success: "Image Updated" }))
    .catch((err) => res.send({ Error: "Error in Image Updating" }));
});

router.patch("/:id", (req, res) => {
  let status = req.body.status;
  let id = req.params.id;
  Article.updateOne({ _id: id }, { publish: status })
    .then((data) => res.send({ Success: "Status Updated" }))
    .catch((err) => res.send({ Error: "Error in Status Updating" }));
});

router.put("/:id", (req, res) => {
  let b = req.body;
  let data = { title: b.title, category: b.category, content: b.content };
  Article.updateOne({ _id: req.params.id }, data)
    .then((data) => res.send({ Success: "Record Updated" }))
    .catch((err) => res.send({ Error: "Error in Record Updating" }));
});

router.delete("/:id", (req, res) => {
  Article.deleteOne({ _id: req.params.id })
    .then((data) => res.send({ status: 1, Response: "Record Deleted" }))
    .catch((err) => res.send({ Error: "Error in Record Deleteing" }));
});

//deleteAll
router.delete("/", (req, res) => {
  Article.deleteMany({})
    .then((data) => res.send({ status: 1, Response: "Record Deleted" }))
    .catch((err) => res.send({ status: 1, Response: "Record Deleted" }));
});

module.exports = router;
