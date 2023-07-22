import axios from '@/config/useAxios';

export const webMenuWithUser = () => axios.get('/api/system/web-menu');
export const useCurrentUser = () => axios.post('/api/user');
