import axios from 'axios';

const authorization = `Client-ID ${import.meta.env.VITE_APP_UNSPLASH_API_KEY}`

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: authorization,
  },
});
