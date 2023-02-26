const express = require("express");
const {
  getAllContactControllers,
  postNewContactController,
  getSingleDataContactController,
  modifySingleContactController,
  deleteSingleContactController,
} = require("../controllers/contactController");
const router = express.Router();

const ContactModel = require("../models/ContactModel");

router.get("/", getAllContactControllers);
router.get("/:id", getSingleDataContactController);

router.post("/", postNewContactController);

router.put("/:id", modifySingleContactController);
router.delete("/:id", deleteSingleContactController);

module.exports = router;
