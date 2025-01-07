const Users = require("../model/user.model.js");

// create user
const createUser = async (req, res) => {
  try {
    const newUser = new Users({
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// get all users
const getAllusers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(201).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// get user by id
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findOne({ _id: id });
    res.status(404).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findOne({ _id: id });
    users.name = req.body.name;
    users.age = Number(req.body.age);
    await users.save();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.deleteOne({ _id: id });
    res.status(202).send("user is deleted");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllusers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
};
