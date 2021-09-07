import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://realm.chat/api',
    timeout: 5000
})


export default instance;