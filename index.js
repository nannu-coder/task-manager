const express = require("express");
const connectDB = require("./DB/connect");
const notFound = require("./middleware/not-found");
const app = express();
const port = 5000;
const dotenv = require("dotenv").config();

const taskRoute = require("./routes/taskRoutes");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);
app.use(notFound);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
