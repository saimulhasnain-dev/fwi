/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:18:55
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Consultation = new Schema(
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
    termsAccepted: {
      type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);
const Consultation = mongoose.model("consultations", ConsultationSchema);

module.exports = Consultation;
