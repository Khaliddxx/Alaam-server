const HttpError = require("../src/models/http-error");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const uniRouter = require("./controllers/University");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,*"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.use("/api/university", uniRouter);

app.use((req, res, next) => {
  console.log(req);
  const error = new HttpError("Could not find this route.", 404);
  console.log(error);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    // fs.unlink(req.file.path, (err)=>{
    //   console.log(err);
    // });
  }
  if (res.headerSent) {
    return next(error);
  }
  // if (error) {
  //   res.json({ message:  "An unknown error occurred!" });
  // }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

module.exports = app;
