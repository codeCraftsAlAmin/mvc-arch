// requires
const app = require("./app.js");
const config = require("./config/user.config.js");
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});