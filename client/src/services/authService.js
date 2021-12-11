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

async function getUser() { 
   
    return await api.httpRequest('/auth' , { 
        credentials : 'include'
    });
}

async function createAccountForWorkers(data) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest('/auth/create', options);
}

async function getUserByID(id) { 
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/auth/user/${id}`, options);
}

async function updateUser(data , id) { 
    const options = {
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/auth/user/update/${id}`, options);
}


export {
    register,
    login,
    logout,
    getUser,
    createAccountForWorkers,
    getUserByID,
    updateUser,
}