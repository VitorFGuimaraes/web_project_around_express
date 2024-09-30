import express from "express";
import usersRouter from "./routes/users.js";
import cardRouter from "./routes/cards.js";

const app = express();
const port = 3000;


app.use(express.json());


app.use("/users", usersRouter);

app.use("/cards", cardRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Servidor Online na porta", port);
});