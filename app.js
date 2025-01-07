// requires
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");
require("./config/user.db");

// Add timeout middleware first
app.use((req, res, next) => {
  res.setTimeout(25000, () => {
    res.status(504).send('Request Timeout');
  });
  next();
});

// Your existing middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRouter);

// Your existing routes
app.get("/", (req, res) => {
  res.sendFile(_dirname + "./views/index.html");
});

// handle route error
app.use((req, res, next) => {
  res.status(404).send({
    Error: "route not found",
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).send({ Error: "server is broken" });
});

module.exports = app;