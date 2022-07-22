import axios from 'axios';

// Just a quick baseURL and initialize axios so we don't have to always type out the main URL and can just pass endpoints
const instance = axios.create({
    baseURL: "https://api.open-meteo.com/v1/"
});

export default instance;