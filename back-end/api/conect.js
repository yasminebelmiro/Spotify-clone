import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://devyasminebelmiro:Xn293uxmynsGkItV@cluster1.gwa5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);
export const db = client.db("spotifyAula");


