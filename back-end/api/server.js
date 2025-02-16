import express from "express";
import cors from "cors";

import { db } from "./conect.js";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = 3300;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("ola, mundo");
});

app.get("/api/artistas", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/api/musicas", async (request, response) => {
  response.send(await db.collection("song").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor ${PORT}`);
});
