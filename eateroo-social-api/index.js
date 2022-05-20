//import packages
require("dotenv").config();
const app = require("./app");

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});
