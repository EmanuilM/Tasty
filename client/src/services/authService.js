import * as api from '../utils/api';

async function register(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest('/auth/register', options);
}

async function login(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest('/auth/login', options);
}

async function logout() { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest('/auth/logout', options);
}

export {
    register,
    login,
    logout,
}