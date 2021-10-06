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

export { 
    register
}