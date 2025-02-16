import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env.NODE_ENV;
const URL = "https://spotify-clone-hashtag-o9r8.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artistas`);
const responseSong = await axios.get(`${URL}/musicas`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;
