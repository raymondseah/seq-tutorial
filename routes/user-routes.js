const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
  db.User.create({
    username: req.body.username,
  }).then((newUser) => res.send(newUser));
});

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Profile, db.Post],
  }).then((allUsers) => res.send(allUsers));
});

router.delete("/find/:id", (req, res) => {
  db.User.destroy({
    where: { id: req.params.id },
  }).then((result) =>
    res.status(403).json({
      'success': true,
      'result': result,
    })
  );
});

module.exports = router;
