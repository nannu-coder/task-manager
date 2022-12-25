const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be given"],
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  completed: Boolean,
});

const model = mongoose.model("task", taskSchema);

module.exports = model;
