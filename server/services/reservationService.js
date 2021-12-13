const tableModel = require('../models/tablesModel');
const reservationModel = require('../models/reservationModel');
const userModel = require('../models/userModel');
const tablesModel = require('../models/tablesModel');



async function getAllReservations(page) {
    return Promise.all([
        await reservationModel.find().sort({ _id: -1 }),
        await reservationModel.find().sort({ _id: -1 }).skip((page - 1) * 10).limit(10),
    ])
}

async function getReservationByID(id) {
    return await reservationModel.findById(id);
}


async function getFreeTables() {
    return await tableModel.find({ status: "Active" });
}

async function createReservation(reservationDetails, userID, table) {
    if (!reservationDetails.firstName || !reservationDetails.lastName || !reservationDetails.phoneNumber || !reservationDetails.time || !reservationDetails.date || !reservationDetails.people) {
        throw ({ message: "All fields are required!" });
    }
    if (!Number(reservationDetails.phoneNumber)) {
        throw ({ message: "Invalid phone number!" });
    }

    if (reservationDetails.phoneNumber.toString().length > 10 || reservationDetails.phoneNumber.toString().length < 10) {
        throw ({ message: "Phone number must be exactly 10 characters long!" });
    }

    const reservation = new reservationModel({
        firstName: reservationDetails.firstName,
        lastName: reservationDetails.lastName,
        phoneNumber: reservationDetails.phoneNumber,
        date: reservationDetails.date,
        time: reservationDetails.time,
        people: reservationDetails.people,
    })

    reservation.save();
    await tablesModel.updateOne({name : table} , {status : "Reserved"});
    await userModel.updateOne({ _id: userID }, { $push: { reservations: reservation } });
    return reservation;
}

async function deleteReservation(id) {
    await reservationModel.deleteOne({ _id: id });
    return getAllReservations(1);
}

async function updateReservation(id, data) {
    if (!data.firstName || !data.lastName || !data.date || !data.people || !data.time) {
        throw ({ message: "All fields are required!" });
    }
    return reservationModel.updateOne({ _id: id }, { firstName: data.firstName, lastName: data.lastName, people: data.people, date: data.date, time: data.time });
}


module.exports = {
    getAllReservations,
    getReservationByID,
    getFreeTables,
    createReservation,
    deleteReservation,
    updateReservation,
}