const express = require("express");
const app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

app.post("/songs", (req, res) => {
  db.defaults({ songs: [] }).write();
  res.send("spoon");
});

app.get("/song", (req, res) => {
  const value = db
    .get("posts")
    .find({ id: 1 })
    .value();
  res.status(200).send({ value });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
