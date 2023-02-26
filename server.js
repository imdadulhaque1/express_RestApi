const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/contacts-db");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database connection Established!");
});

const contactRoutes = require("./api/routes/contactRoutes");
const userRoutes = require("./api/routes/userRoutes");

const app = express();
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("I am a Middleware Function!");
  next();
});

app.use("/api/contacts/", contactRoutes);
app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});

const contacts = [
  { name: "Imdadul Haque", email: "imdadul15-1440@diu.edu.bd" },
  { name: "Israt Jahan Maisha", email: "maisha@gmail.com" },
  { name: "Shampa Khatun", email: "shampa@gmail.com" },
];
