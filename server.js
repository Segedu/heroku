const express = require("express"),
  app = express(),
  PORT = 8080;

app.get("*", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
