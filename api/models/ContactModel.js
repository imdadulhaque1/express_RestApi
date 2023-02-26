const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const valid = require("validator");

const ConatctSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: (v) => {
        return valid.isMobilePhone(v);
      },
    },
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: (v) => {
        return valid.isEmail(v);
      },
      message: `${v} is not an valid email!!!`,
    },
  },
});

const Contact = mongoose.model("Contacts", ConatctSchema);
module.exports = Contact;
