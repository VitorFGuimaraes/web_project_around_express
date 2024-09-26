import express from "express";
import usersRouter from "./routes/users.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World")
} )

app.listen(port, () => {
  console.log("Servidor Online");
} )
