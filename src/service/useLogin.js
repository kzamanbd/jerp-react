import axios from '../config/useAxios';

export default (username, password) => axios.post('/api/auth/login', { username, password });
