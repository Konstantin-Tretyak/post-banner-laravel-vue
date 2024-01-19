import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_BASE_URL, // Replace with your default base URL
});

export default instance;