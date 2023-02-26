const ContactModel = require("../models/ContactModel");

const getAllContactControllers = (req, res, next) => {
  ContactModel.find()
    .then((data) => {
      res.status(200).json({
        message: "All Contacts Showed!!!",
        contacts: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Occured!!!",
        error: err,
      });
    });
};

const postNewContactController = (req, res, next) => {
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
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Occured!!!",
        error: err,
      });
    });
};

module.exports = {
  getAllContactControllers,
  postNewContactController,
};
