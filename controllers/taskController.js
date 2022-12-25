const Task = require("../models/taskModel");

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ task, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const result = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ result, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
