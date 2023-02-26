const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const registerController = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new UserModel({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((registrationResult) => {
        res.status(201).json({
          message: "User Successfully Created!",
        });
      })
      .catch((error) => {
        res.json({
          error,
        });
      });
  });
};
const loginController = (req, res, next) => {};
const getAllUser = (req, res, next) => {};

module.exports = {
  registerController,
  loginController,
  getAllUser,
};
