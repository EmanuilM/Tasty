const tableModel = require('../models/tablesModel');
const reservationModel = require('../models/reservationModel');
const userModel = require('../models/userModel');



async function getAllReservations() { 
    return await reservationModel.find();
}

async function getReservationByID(id) { 
    return await reservationModel.findById(id);
}


async function getFreeTables() { 
    return await tableModel.find({status : "Active"});
}

async function createReservation(reservationDetails , userID) { 
    if(!reservationDetails.firstName || !reservationDetails.lastName || !reservationDetails.phoneNumber || !reservationDetails.time || !reservationDetails.date || !reservationDetails.people) { 
        throw({message : "All fields are required!"});
    }
    if(!Number(reservationDetails.phoneNumber)) { 
        throw({message : "Invalid phone number!"});
    }

    if(reservationDetails.phoneNumber.toString().length > 10 || reservationDetails.phoneNumber.toString().length < 10) { 
        throw({message : "Phone number must be exactly 10 characters long!"});
    }

    const reservation = new reservationModel({
        firstName : reservationDetails.firstName,
        lastName : reservationDetails.lastName,
        phoneNumber : reservationDetails.phoneNumber,
        date : reservationDetails.date,
        time : reservationDetails.time,
        people : reservationDetails.people,
    })

    reservation.save();
    await  userModel.updateOne({_id : userID} , {$push : {reservations : reservation}});
    return reservation;
}

async function deleteReservation(id) { 
   await reservationModel.deleteOne({_id : id });
   return getAllReservations();
}

async function updateReservation(id , data) { 
    if(!data.firstName || !data.lastName || !data.date || !data.people || !data.time) { 
        throw({message : "All fields are required!"});
    }
    return reservationModel.updateOne({_id : id} , {firstName : data.firstName , lastName : data.lastName , people : data.people , date : data.date , time : data.time });
}


module.exports = { 
    getAllReservations,
    getReservationByID,
    getFreeTables,
    createReservation,
    deleteReservation,
    updateReservation,
}