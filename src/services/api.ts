import axios from 'axios';
import md5 from 'md5';

const publicKey = 'ad1b20c57350524ad1e855205dc564d0';
const privateKey = 'add4f251016adaba623248d0f79c58e8362ee2fe';

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const authKey = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
});

export default api;
