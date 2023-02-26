const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const loginController = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  UserModel.findOne({ email }).then((userFound) => {
    if (userFound) {
      bcrypt.compare(password, userFound.password, (err, userResult) => {
        if (err) {
          res.json({
            message: "User Login Error!!!",
          });
        }
        if (userResult) {
          let token = jwt.sign(
            { email: userFound.email, _id: userFound._id },
            "SECRET",
            { expiresIn: "2h" }
          );
          res.json({
            message: "User Successfully Login!!!",
            token,
          });
        } else {
          res.json({
            message: "Login Failed, Password Doesn't Match!!!",
          });
        }
      });
    } else {
      res.json({
        message: "User Not Found!!! Please create an account, first.",
      });
    }
  });
};

const getAllUser = (req, res, next) => {
  UserModel.find()
    .then((users) => {
      res.json({
        users,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

module.exports = {
  registerController,
  loginController,
  getAllUser,
};
