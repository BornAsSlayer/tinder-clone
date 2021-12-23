import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-cl-be.herokuapp.com",
});

export default instance;