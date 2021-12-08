import './Reservation.css';
import { Route, NavLink } from 'react-router-dom';
import MakeReservation from './MakeReservation/MakeReservation';
import ReservationDetails from './ReservationDetails/ReservationDetails';
import { useState } from 'react';
import * as reservationService from '../../services/reservationService';
import { useDispatch } from 'react-redux';
import { loader } from '../../store/loader';

const Reservation = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        people: '',
        date: '',
        time: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });

    function onInputChangeHandler(e) {
        const { name, value } = e.target;
        if(name === 'people') { 
            setFormData((state) => ({ ...state, [name]: Number(value.split(' ')[0]) }));

        }else { 
            setFormData((state) => ({ ...state, [name]: value }));
        }
    }

    async function createReservation(e) {
        e.preventDefault();
        dispatch(loader());
        reservationService.createReservation(formData)
            .then(res => {
                dispatch(loader());
                console.log(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);

            })
    }



    return (
        <main>
            <section className="reservation-page-wrapper">
                <article className="reservation-page-content">
                    <div className="navigation-headings">
                        <NavLink activeClassName="current" exact to="/reservation/make">1. Find a table</NavLink>
                        <NavLink activeClassName="current" exact to="/reservation/details">2. Your details</NavLink>
                    </div>

                    <Route path="/reservation/make" component={MakeReservation}>
                        <MakeReservation onInputChangeHandler={onInputChangeHandler} formData={formData} />
                    </Route>
                    <Route path="/reservation/details" component={ReservationDetails}>
                        <ReservationDetails onInputChangeHandler={onInputChangeHandler} createReservation={createReservation} />
                    </Route>

                </article>



            </section>
        </main>
    )
}

export default Reservation;
