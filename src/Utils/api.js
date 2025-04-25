import axios from "axios";

const BASE_URL = 'https://coinranking1.p.rapidapi.com';
const options = {
  headers: {
    'X-RapidAPI-Key': '54d71d40a6msh53d0bbb8deedc6dp12631cjsn654bac112561',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const getDataFromApi = (url) => {
  return axios.get(`${BASE_URL}${url}`, options);
}

export { getDataFromApi };