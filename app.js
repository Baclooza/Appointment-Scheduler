import express from "express";

const app = express();

const PORT = 3003;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const appointments = [];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/confirm", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post("/submit-appointment", (req, res) => {
  const appointment = req.body;

  appointment["timestamp"] = new Date();

  appointments.push(appointment);

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get("/admin", (req, res) => {
  res.send(appointments);
});

app.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
