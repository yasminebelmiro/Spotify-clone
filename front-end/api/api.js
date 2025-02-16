import axios from "axios";

const URL = "http://localhost:3300";

const responseArtist = await axios.get(`${URL}/artistas`);
const responseSong = await axios.get(`${URL}/musicas`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;
