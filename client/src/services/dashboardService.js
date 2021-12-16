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


async function increaseEarnings(money) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({money}),
        credentials: 'include' 
    }
    return await api.httpRequest(`/dashboard/update-earnings`, options)
}

export { 
    getAllDiscounts,
    increaseEarnings
}