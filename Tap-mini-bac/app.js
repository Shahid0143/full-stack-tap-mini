
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
require("dotenv").config();


const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);

module.exports = app;
