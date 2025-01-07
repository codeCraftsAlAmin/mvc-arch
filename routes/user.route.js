const express = require("express");
const {
  getAllusers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");
const router = express.Router();

// create user
router.post("/user", createUser);

// get user
router.get("/user", getAllusers);

// get single user
router.get("/user/:id", getOneUser);

// delete user
router.delete("/user/:id", deleteUser);

router.patch("/user/:id", updateUser);

module.exports = router;
