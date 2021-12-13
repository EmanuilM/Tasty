import './ManageReservations.css';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import * as reservationService from '../../../services/reservationService';
import ReservationListItem from './ReservationListItem/ReservationListItem';
import { Link } from 'react-router-dom';

const ManageReservations = ({ location }) => {

    const dispatch = useDispatch();


    const [reservations, setReservations] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const page = location.search.split('=')[1];
        dispatch(loader());
        reservationService.getAllReservations(page || 1)
            .then(([allReservations, filteredReservations]) => {
                dispatch(loader());
                console.log(allReservations);
                setReservations(filteredReservations);
                setPages(Array.from({ length: Math.ceil(allReservations.length / 10) }, (v, i) => i + 1))
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }, [location.search])




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
                        key={x._id}
                        firstName={x.firstName}
                        lastName={x.lastName}
                        people={x.people}
                        date={x.date}
                        time={x.time}
                        phoneNumber={x.phoneNumber}
                        id={x._id}
                        setPages={setPages}
                        setReservations={setReservations} />
                }) : <h1>There's no reservations yet!</h1>}


            </ul>

            <ul className="reservations-paggination">
                {reservations.length ? <li>
                    <Link to={`/admin-panel/reservations?page=${Number(location.search.split('=')[1]) - 1 ? Number(location.search.split('=')[1]) - 1 : 1}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </li> : ""}

                {pages.map((x) => {
                    return <li key={x}>
                        <Link to={`/admin-panel/reservations?page=${x}`}>{x}</Link>
                    </li>
                })}


                {reservations.length ? <li>
                    <Link to={`/admin-panel/reservations?page=${Number(location.search.split('=')[1]) + 1 ? Number(location.search.split('=')[1]) + 1 : 2}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </li> : ""}


            </ul>
        </section>
    )
}

export default ManageReservations;