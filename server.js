const express = require("express");
require("dotenv").config();

const app = express();

app.get("*", (req, res) => {
  res.send("welcome");
});

const MONGO_URL = process.env.MONGO_URL;
PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
