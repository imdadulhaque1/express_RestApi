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

const getSingleDataContactController = (req, res, next) => {
  let id = req.params.id;

  ContactModel.findById(id)
    .then((data) => {
      res.status(200).json({
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
const modifySingleContactController = (req, res, next) => {
  const id = req.params.id;

  let updatedContacts = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };
  ContactModel.findByIdAndUpdate(id, { $set: updatedContacts })
    .then((data) => {
      ContactModel.findById(data._id).then((newContact) => {
        res.json({
          message: `${id} is Successfully modified!`,
          contact: newContact,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Modifying Related Error Occured!!!",
        error: err,
      });
    });
};

const deleteSingleContactController = (req, res, next) => {
  const id = req.params.id;
  ContactModel.findByIdAndRemove(id)
    .then((data) => {
      res.json({
        message: `${id} Contact is Deleted!`,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Deletion Related Error Occured!!!",
        error: err,
      });
    });
};

module.exports = {
  getAllContactControllers,
  getSingleDataContactController,
  postNewContactController,
  modifySingleContactController,
  deleteSingleContactController,
};
