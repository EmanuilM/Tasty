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

export { 
    getAllProducts
}