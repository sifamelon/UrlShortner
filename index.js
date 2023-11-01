const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const Port = process.env.Port || 3000;
app.use("/", (req, res) => {
  res.render("index");
});
app.listen(Port, () => console.log("started server"));
