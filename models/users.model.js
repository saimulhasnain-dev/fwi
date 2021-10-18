/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:23:02
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
    },
    gender: {
      type: String,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
    },
    userType: {
      type: String,
    },
    otp: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("Users", UserSchema);

module.exports = User;
