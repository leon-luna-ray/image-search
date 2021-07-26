// This code will contain the API call rather than having it on the App.js
import axios from 'axios';
// The create method will create a new axios instance with prepopulated data
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 4X1RWjcoO5BPB_6WVEyaGmtWG9EmKAyom5uwjBoQ2Is',
  },
});
