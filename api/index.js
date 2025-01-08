// requires
// const app = require("./app");
// const config = require("./config/user.config.js");
// const PORT = config.app.port;

// app.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`);
// });

const serverless = require("serverless-http");
const app = require("../app");

module.exports.handler = serverless(app);
