const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
  db.Post.create({
    text: req.body.text,
    UserId: req.body.UserId,
  }).then((newText) => res.send(newText));
});

router.get("/find/:id", (req, res) => {
  db.Post.findAll({
    where: { UserId: req.params.id },
    include: [db.User],
  }).then((allPosts) => res.send(allPosts));
});

module.exports = router;
