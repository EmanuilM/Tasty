import * as api from '../utils/api';

async function getAllDiscounts(page) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/discount?page=${page}`, options)
}

async function getPromoCodeByID(id) {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/discount/${id}`, options)
}


async function createDiscount(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest('/discount/create', options)
}

async function checkPromoCode(code) {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/discount/check/${code || undefined}`, options)
}


async function deletePromoCode(id) {
    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/discount/delete/${id}`, options)
}

async function updatePromoCode(id , data) {
    const options = {
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/discount/update/${id}`, options)
}



export {
    getAllDiscounts,
    getPromoCodeByID,
    createDiscount,
    checkPromoCode,
    deletePromoCode,
    updatePromoCode,
}