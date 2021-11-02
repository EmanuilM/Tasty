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



async function createProduct(data , images) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([data,images]),
        credentials: 'include'
    }
    return await api.httpRequest('/menu/create-product', options)
}

async function uploadImage(files) { 
    const options = {
        method: 'POST',
        body: files,
        credentials: 'include'
    }
    return await api.httpRequest('/menu/upload-image', options)

}


export { 
    getProductsByMenuCategory,
    createProduct,
    uploadImage,
}