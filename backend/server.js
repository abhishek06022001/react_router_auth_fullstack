const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
dotenv.config();
app.use(cors());
app.use(bodyParser());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Listening to the port ");
});
app.use("/api", require("./router/userRouter"));
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error found", error);
  });
