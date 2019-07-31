import axios from 'axios';

export default axios.create({   //create preconfig Axios instance
    baseURL: 'http://localhost:3001'
})