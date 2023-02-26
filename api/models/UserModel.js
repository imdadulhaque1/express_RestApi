const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const valid = require("validator");

const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    minlength: 3,
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
      message: `{VALUE} is not an valid email!!!`,
    },
  },
  password: String,
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
