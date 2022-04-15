// check auth
export default function isAuth() {
    // get token from localStorage
    const token = localStorage.getItem('token') || false;
    return !!token;
}
