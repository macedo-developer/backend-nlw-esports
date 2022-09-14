import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json({ message: "hello" });
});

app.listen(3333, () => {
  console.log("Rodando na 3333 🔥");
});
