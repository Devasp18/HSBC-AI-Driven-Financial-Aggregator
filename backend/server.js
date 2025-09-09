const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());

const transactions = JSON.parse(fs.readFileSync("transactions.json", "utf8"));

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});