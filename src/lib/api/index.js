import axios from 'axios';

const API = axios.create({ baseURL: 'http://122.170.109.73:7575/api/' });

export const admin_login = (email, password) => 
    API.post('admin_login/', { email, password });

export const user_login = (email, password) => 
    API.post('user_login/', { email, password });

export default API;