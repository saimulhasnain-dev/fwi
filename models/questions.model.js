/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:21:09
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
    },
    response: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Question = mongoose.model("Questions", QuestionSchema);

module.exports = Question;
