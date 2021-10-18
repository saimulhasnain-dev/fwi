/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:28:26
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Categories", CategorySchema);

module.exports = Category;
