const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome on Todo App Node");
});

app.listen(port);
