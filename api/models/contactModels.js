const mongoose = require("mongoose");
const valid = require("validator");
const Schema = mongoose.Schema;

// Create a Schema
const ContactScherma = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (v) => {
        return valid.isEmail(v);
      },
      message: `${v} is not an email.`,
    },
  },
});

const Contact = mongoose.model("Contact", ContactScherma);
module.exports = Contact;
