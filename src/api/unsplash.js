// This code will contain the API call rather than having it on the App.js
import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_UNSPLASH_API_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});
