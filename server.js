const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const contactRoutes = require("./api/routes/contactRoutes");

const app = express();
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("I am a Middleware Function!");
  next();
});

app.use("/api/contacts/", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});

const contacts = [
  { name: "Imdadul Haque", email: "imdadul15-1440@diu.edu.bd" },
  { name: "Israt Jahan Maisha", email: "maisha@gmail.com" },
  { name: "Shampa Khatun", email: "shampa@gmail.com" },
];
