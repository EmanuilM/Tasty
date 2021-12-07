import './ManageReservations.css';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import * as reservationService from '../../../services/reservationService';
import ReservationListItem  from './ReservationListItem/ReservationListItem';  

const ManageReservations = () => {

    const dispatch = useDispatch();

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        dispatch(loader());
        reservationService.getAllReservations()
            .then(res => {
                dispatch(loader());
                console.log(res);
                setReservations(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }, [])


  


    return (
        <section className="admin-panel-manage-reservations-wrapper">
            <h1>Manage reservations</h1>
            <ul className="manage-reservations-headings">
                <li>Name</li>
                <li>People</li>
                <li>Date</li>
                <li>Time</li>
                <li>Phone number</li>
            </ul>
            <ul className="managa-reservations-list">
                {reservations.length ? reservations.map(x => {
                    return <ReservationListItem 
                    firstName={x.firstName} 
                    lastName={x.lastName} 
                    people={x.people} 
                    date={x.date} 
                    time={x.time} 
                    phoneNumber={x.phoneNumber} 
                    id={x._id} 
                    setReservations={setReservations} / >
                }) : <h1>There's no reservations yet!</h1>}


            </ul>
        </section>
    )
}

export default ManageReservations;