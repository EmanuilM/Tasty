import * as api from '../utils/api';

async function getProductsByMenuCategory(category) { 
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/menu/${category}`, options)
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
    return await api.httpRequest('/menu/create-product', options)
}





export { 
    getProductsByMenuCategory,
    createProduct,
}