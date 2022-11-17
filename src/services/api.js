//url base: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=7730fba711a3fcb572843117f368d781

import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
