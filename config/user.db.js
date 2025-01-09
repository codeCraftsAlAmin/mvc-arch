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
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000,
        serverSelectionTimeoutMS: 10000,
      });
    }
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("db isn't connected");
    process.exit(1);
  }
};

connectDb();
