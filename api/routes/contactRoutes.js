const express = require("express");
const {
  getAllContactControllers,
  postNewContactController,
} = require("../controllers/contactController");
const router = express.Router();

const ContactModel = require("../models/ContactModel");

router.get("/", getAllContactControllers);

router.post("/", postNewContactController);

module.exports = router;
