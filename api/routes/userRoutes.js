const express = require("express");
const {
  registerController,
  loginController,
  getAllUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/", getAllUser);

module.exports = router;
