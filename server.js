const express = require("express");
const path = require("path");
const { data, Thing } = require("./db");

const app = express();
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);
//app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res, next) => {
  try {
    res.send(await Thing.findAll());
  } catch (ex) {
    next(ex);
  }
});

const start = async () => {
  try {
    await data();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server listening at PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
