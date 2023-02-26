const express = require("express");
const router = express.Router();

const ContactModel = require("../models/ContactModel");

router.get("/", (req, res, next) => {});

router.post("/", (req, res, next) => {
  const contact = new ContactModel({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  contact
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Contact Added!",
        contact: data,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
