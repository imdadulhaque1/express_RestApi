const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Server Running....!!!</h1>");
});

app.get("/posts", (req, res) => {
  res.send("<h1>I am From Post!!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});
