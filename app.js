// requires
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");
require("./config/user.db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

// base route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
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
