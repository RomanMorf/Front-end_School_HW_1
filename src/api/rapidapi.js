var axios = require("axios").default;

const keyDefault = "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
const key = "5218329b13msheb94d39142588d6p101090jsncd20e51ab52b"

export const urlApi = "https://tiktok33.p.rapidapi.com"

export const headersApi = {
  "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  "x-rapidapi-key": key,
}

export const http = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com',
  headers: {
    'Content-type': 'application/json',
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
  }
})



// ------- TEST ZONE ---------
// var options = {
//   method: 'GET',
//   url: 'https://tiktok-all-in-one.p.rapidapi.com/feed',
//   params: {region: 'US'},
//   headers: {
//     'x-rapidapi-host': 'tiktok-all-in-one.p.rapidapi.com',
//     'x-rapidapi-key': '5218329b13msheb94d39142588d6p101090jsncd20e51ab52b'
//   }
// };

// export const http = axios.request(options)
// --------------------------------

