import * as api from '../utils/api';

async function getAllDiscounts(page) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/dashboard`, options)
}

export { 
    getAllDiscounts,
}