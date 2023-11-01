const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const Port = process.env.Port || 3000;
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(Port, () => console.log("started server"));
