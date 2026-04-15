// models/Admin.model.js
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed password
});

module.exports = mongoose.model("Admin", AdminSchema);
