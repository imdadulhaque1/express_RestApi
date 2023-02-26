const express = require("express");
const {
  registerController,
  loginController,
  getAllUser,
} = require("../controllers/userController");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/", authenticate, getAllUser);

module.exports = router;
