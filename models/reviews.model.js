/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:51:16
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    name: {
      type: String,
    },
    userImage: {
      type: String,
    },
    review: {
      type: String,
    },
    starRating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model("reviews", ReviewSchema);

module.exports = Review;
