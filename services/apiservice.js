import axios from 'axios';

import { server } from '../constants';
const API_URL = server.url + '/api';
export default axios.create({
    baseURL: API_URL
});