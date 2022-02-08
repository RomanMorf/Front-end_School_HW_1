const axios = require("axios").default;

const keyDefault = "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66";
const key = "5218329b13msheb94d39142588d6p101090jsncd20e51ab52b";
const thirdKey = "449aafd0c7msh320c74f035d4522p194597jsn42f4e5c35d0b";

const urlApi = "https://tiktok33.p.rapidapi.com";

const headersApi = {
  "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  "x-rapidapi-key": thirdKey,
};

export const http = axios.create({
  baseURL: urlApi,
  headers: headersApi,
});
