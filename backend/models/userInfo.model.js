const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  sex: { type: String, required: true },
  experience: { type: String, required: true },
  avyTraining: Boolean,
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
