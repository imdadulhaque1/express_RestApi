const express = require("express");
const router = express.Router();

const contacts = [];

router.get("/", (req, res, next) => {
  res.status(200).json({
    contacts,
  });
});

router.post("/", (req, res, next) => {
  contacts.push({
    name: req.body.name,
    email: req.body.email,
  });
  res.status(201).json({
    message: `Posted Data Saved !`,
  });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `I am from PUT method with ${id} id!`,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `I am from DELETE method with ${id} id!`,
  });
});

module.exports = router;
