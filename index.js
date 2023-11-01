const express = require("express");
const path = require("path");
const shorturl = require("./database/schemas");
const app = express();
require("./database/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const Port = process.env.Port || 3000;
app.get("/", async (req, res) => {
  const gen = await shorturl.find();
  res.render("index", { genrate: gen });
});
app.post("/generate", async (req, res) => {
  console.log(req.body);
  await shorturl.create({ rowUrl: req.body.rowUrl });
  res.redirect("/");
});
app.listen(Port, () => console.log("started server"));
