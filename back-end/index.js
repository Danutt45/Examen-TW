const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
var router = require("./routes");

var port = process.env.PORT || 8080;

const corsOptions = {
  origin: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Methods",
    "Access-Control-Request-Headers",
    "Access-Control-Allow-Headers",
  ],
  credentials: true,
  enablePreflight: true,
};

var app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "build")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,DELETE,PUT,POST");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Content-Range", "posts 0-20/20");
  next();
});
app.use("/", router);

app.listen(port, () => console.log("App is runing on port " + port));
