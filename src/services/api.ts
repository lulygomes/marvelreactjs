import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const time = Number(new Date());

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
