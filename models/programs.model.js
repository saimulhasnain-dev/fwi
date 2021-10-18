/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:17:37
 * @modify date 2021-10-18 18:48:21
 * @desc [description]
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Service = new Schema({
  heading: { type: String },
  description: { type: String },
});
const Questionnaire = new Schema({
  question: { type: String },
  questionType: { type: String },
  answers: { type: String }, // comma separated answers in case of radio and checkbox type
});
const Reminder = new Schema({
  reminderType: { type: String },
  reminderInterval: { type: String },
  message: { type: String },
  endDuration: { type: Number },
  status: { type: String },
  selectedWeek: { type: String },
  selectedDays: { type: String },
});
const Program = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
    name: {
      type: String,
    },
    cost: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    description: {
      type: String,
    },
    reasonToChoose: {
      type: String,
    },
    offerPrice: {
      type: Number,
    },
    services: [Service],
    questionnaires: [Questionnaire],
    reminders: [Reminder],
  },
  {
    timestamps: true,
  }
);
const Program = mongoose.model("programs", ProgramSchema);

module.exports = Program;
