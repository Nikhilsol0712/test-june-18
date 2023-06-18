require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const dbUri = require("./config/db.config");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });

const PORT = process.env.PORT || 8000; // port at which server listening

// import routes
let authRouter = require("../src/routes/auth.routes");

let categoryRouter = require("../src/routes/category.routes");

// import other routes BookMark Category News

// define root routes.
app.use("/authentication", authRouter);

app.use("/category", categoryRouter);

// define other routes BookMark Category News

app.listen(PORT, () => {
  console.log("server is listening to the port:", PORT);

  //connect to mongo db and it creates db also
  mongoose.connect(dbUri).then(
    () => {
      console.log("connect to mongo db successfully");
    },
    (err) => {
      console.log("Error occured:", err);
    }
  );
});
