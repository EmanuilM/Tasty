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

async function getAllOrders(page) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/orders?page=${page}`, options)
}

async function getOrderByID(id) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/${id}`, options)
}

async function deleteOrderByID(id) { 
    const options = {
        method : 'DELETE',
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/delete/${id}`, options)
}


async function updateOrder(id , status) { 
    const options = {
        method : 'PATCH',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify([status]),
        credentials: 'include'
    }
    return await api.httpRequest(`/orders/update/${id}`, options)
}


export { 
    getAllProducts,
    getProductByID,
    makeOrder,
    getAllOrders,
    getOrderByID,
    deleteOrderByID,
    updateOrder
}