import * as api from '../utils/api';


async function getProducts() {
    return await api.httpRequest('/daily-menu', { credentials: 'include' })
}

async function createProduct(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest('/daily-menu/create-product', options)
}

async function deleteProduct(id) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/daily-menu/delete-product/${id}`, options)
}

async function editProduct(id , data) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/daily-menu/edit-product/${id}`, options)
}

async function getProductByID(id) { 
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/daily-menu/product/${id}`, options)
}

export {
    createProduct,
    getProducts,
    deleteProduct,
    editProduct,
    getProductByID,
}