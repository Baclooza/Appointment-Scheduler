import express from "express";

const app = express();

const PORT = 3004;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
