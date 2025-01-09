// requires
const mongoose = require("mongoose");
const config = require("./user.config");
const dbUrl = config.db.url;

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("db is connected"))
//   .catch((error) => {
//     console.log("db isn't connected", error.message);
//     process.exit(1);
//   });

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("db isn't connected");
  }
};

connectDb();
