import './ReservationListItem.css';
import { useState } from 'react';
import DeleteModal from '../../../shared/DeleteModal/DeleteModal';
import * as reservationService from '../../../../services/reservationService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { Link } from 'react-router-dom';

const ReservationListItem = ({ firstName, lastName, people, date, time, phoneNumber, id, setReservations }) => {

    const dispatch = useDispatch();

    const [isDeleteModalActive, setDeleteModalActive] = useState(false);

    function showDeleteModal() {
        setDeleteModalActive(true);
    }


    function hideDeleteModal() {
        setDeleteModalActive(false);
    }

    function deleteReservation(id) {
        dispatch(loader());
        reservationService.deleteReservation(id)
            .then(res => {
                dispatch(loader());
                console.log(res);
                setReservations(res);
                hideDeleteModal();
            })
            .catch(error => {
                dispatch(loader());

                console.log(error);
            })
    }


    return (
        <li>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{people}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{phoneNumber}</p>
            <Link to={`/admin-panel/reservations/edit/${id}`}>
                <i className="fas fa-highlighter editReservationIcon"></i>
            </Link>
            <i className="fas fa-trash deleteReservationIcon" onClick={showDeleteModal} ></i>
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} text="reservation" id={id} deleteItem={deleteReservation} />

        </li>
    )
}

export default ReservationListItem;