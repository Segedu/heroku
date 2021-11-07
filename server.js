const express = require("express"),
  app = express();
require("dotenv").config();

app.get("*", (req, res) => {
  res.send("welcome");
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
