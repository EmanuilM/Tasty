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
        body: data,
        credentials: 'include'
    }
    return await api.httpRequest('/menu/create-product', options)
}

async function deleteProduct(id) { 
    const options = {
        method: 'POST',
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/menu/delete-product/${id}`, options)

}

async function getProductByID(id) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/menu/product/${id}`, options)
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
    return await api.httpRequest(`/menu/edit-product/${id}`, options)
}


async function deleteImage(id) { 
    const options = {
        method: 'POST',
        credentials: 'include'
    }
    return await api.httpRequest(`/menu/delete-image/${id}`, options)
}


async function update(id , imageID) { 
    const options = {
        method : 'PATCH',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify([imageID]),
        credentials: 'include'
    }
    return await api.httpRequest(`/menu/update/${id}`, options)
}






export { 
    getProductsByMenuCategory,
    createProduct,
    getProductByID,
    deleteProduct,
    editProduct,
    deleteImage,
    update
}