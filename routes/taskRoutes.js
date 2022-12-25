const router = require("express").Router();
const {
  getAllTask,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;
