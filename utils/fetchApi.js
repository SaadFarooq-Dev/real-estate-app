import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
 const {data} = await axios.get(url, {
  headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '5b40eea887msh4bf6eceb4d363f3p14aaa5jsncd6d6edbe2ad',
  },
 });
 return data
};
