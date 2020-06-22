import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f67fa.firebaseio.com'
});

export default instance;