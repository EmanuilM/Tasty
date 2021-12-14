import * as api from '../utils/api';


async function getAllReservations(page) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/all?page=${page}`, options)
}

async function getReservationByID(id) { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/reservation/${id}`, options)
}



async function getFreeTables() { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/find-tables`, options)
}

async function createReservation(data , table) { 
    const options = {
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/create?table=${table}`, options)
}


async function deleteReservation(id) { 
    const options = {
        method : 'DELETE',
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/delete/${id}`, options)
}



async function updateReservation(id , data) { 
    const options = {
        method : 'PATCH',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/update/${id}`, options)
}


export {
    getAllReservations,
    getReservationByID,
    getFreeTables,
    createReservation,
    deleteReservation,
    updateReservation,
}
