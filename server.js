const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');
const app = express();
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

// log Request
app.use(morgan("tiny"));

// MongoDB connection 
connectDB();

//parser request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/eja"))

// load assets
app.use("./css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));


// load route
app.use('/', require("./server/routers/router"))

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
