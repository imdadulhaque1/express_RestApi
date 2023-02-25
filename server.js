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

// Create Schema
const Schema = mongoose.Schema;
const demoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  phone: {
    type: String,
    required: true,
  },
});
// Create a Model
const demoDB = mongoose.model("Demo", demoSchema);

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

// Create database and save data in dataset
app.get("/demo", (req, res) => {
  const demo = demoDB({
    name: "Imdadul Haque",
    phone: "01773964101",
  });
  demo
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.log(err));
});
// Show data from database
app.get("/get", (req, res) => {
  demoDB
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});

const contacts = [
  { name: "Imdadul Haque", email: "imdadul15-1440@diu.edu.bd" },
  { name: "Israt Jahan Maisha", email: "maisha@gmail.com" },
  { name: "Shampa Khatun", email: "shampa@gmail.com" },
];
