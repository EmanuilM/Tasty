import * as api from '../utils/api';

async function getTables() { 
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/tables`, options)
}

async function getTableByID(id) { 
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/tables/table/${id}`, options)
}

async function createTable(data) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/tables/create`, options)
}

async function deleteTable(id) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/tables/delete/${id}`, options);

}

async function addProduct(id , data , status) { 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify([id,data , status]),
        credentials: 'include'
    }
    return await api.httpRequest(`/tables/add-product`, options)
}


async function deleteProduct(id , produtToDelete) { 
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify([produtToDelete]),
        credentials: 'include'
    }
    return await api.httpRequest(`/tables/delete-product/${id}`, options)
}


export { 
    getTables,
    getTableByID,
    createTable,
    deleteTable,
    addProduct,
    deleteProduct,
}