import * as api from '../utils/api';


async function getAllProducts(category , page) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/all-products/${category}?page=${page}`, options)
}


async function getProductByID(id) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/product/${id}`, options)
}

async function makeOrder(orderDetails , orderedProducts) { 
    const options = {
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify([orderDetails , orderedProducts]),
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/make`, options)
}

export { 
    getAllProducts,
    getProductByID,
    makeOrder,
}