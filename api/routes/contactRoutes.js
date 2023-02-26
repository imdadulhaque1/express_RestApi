const express = require("express");
const {
  getAllContactControllers,
  postNewContactController,
  getSingleDataContactController,
} = require("../controllers/contactController");
const router = express.Router();

const ContactModel = require("../models/ContactModel");

router.get("/", getAllContactControllers);
router.get("/:id", getSingleDataContactController);

router.post("/", postNewContactController);

module.exports = router;
