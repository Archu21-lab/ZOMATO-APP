//create server

const express = require("express");
const cookieparser = requirec("cookie-parser");

const app = express();
app.use(cookieparser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
