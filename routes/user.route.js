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
router.post("/", createUser);

// get user
router.get("/", getAllusers);

// get single user
router.get("/:id", getOneUser);

// delete user
router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
