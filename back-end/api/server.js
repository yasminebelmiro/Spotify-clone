import express from "express";
import cors from "cors"

import { db } from "./conect.js";
const app = express();
const PORT = 3300;

app.use(cors());

app.get("/", (request, response) => {
  response.send("ola, mundo");
});

app.get("/artistas", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/musicas", async (request, response) => {
  response.send(await db.collection("song").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor ${PORT}`);
});
