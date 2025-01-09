// requires
const mongoose = require("mongoose");
const config = require("./user.config");
const dbUrl = config.db.url;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("db isn't connected");
  }
};

connectDb();
