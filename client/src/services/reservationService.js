import * as api from '../utils/api';


async function getAllReservations() { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/all`, options)
}

async function getReservationByID() { 
    const options = {
        headers : { 
            'Content-Type' : 'application/json',
        },
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/all`, options)
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

async function createReservation(data) { 
    const options = {
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),
        credentials: 'include'
    }
    return await api.httpRequest(`/reservation/create`, options)
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
