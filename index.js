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
  const genrate = await shorturl.find();
  res.render("index", { genrate: genrate });
});
app.post("/generate", async (req, res) => {
  console.log(req.body);
  await shorturl.create({ rowUrl: req.body.rowUrl });
  res.redirect("/");
});
app.get("/:gene", async (req, res) => {
  const geneParam = req.params.gene; // Get the value of ":gene" from the URL

  try {
    const url = await shorturl.findOne({ generatedUrl: req.params.gene });

    if (!url) {
      res.sendStatus(404);
    } else {
      res.redirect(url.rowUrl);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Server error status code
  }
});

app.listen(Port, () => console.log("started server"));
