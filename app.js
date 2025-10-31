const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");

const port = 3000;

app.use(cors());
app.use("/", express.static(path.join(__dirname, "/dist")));

app.get("/api/porssisahko", async (req, res) => {
  const targetUri = `https://api.porssisahko.net${req.query.url}`;
  const apiRes = await fetch(targetUri);
  const data = await apiRes.text();

  res.send(data);
});

//app.get("*", function(req, res) {
//  res.sendFile("index.html", { root: path.join(__dirname, "/dist") });
//});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});