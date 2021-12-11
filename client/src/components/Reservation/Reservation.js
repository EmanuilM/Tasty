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
        people: '1',
        date: '',
        time: '7 pm',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({
        firstName: true,
        lastName: true,
        phoneNumber: true,
    })


    function onInputChangeHandler(e) {
        const { name, value } = e.target;
        if (name === 'people') {
            setFormData((state) => ({ ...state, [name]: Number(value.split(' ')[0]) }));

        } else if (name === 'firstName' || name === 'lastName') {
            setErrors(state => ({ ...state, [name]: value.length < 4 ? true : false }));
        } else if (name === 'phoneNumber') {
            setErrors(state => ({ ...state, [name]: value.length < 10 || value.length > 10 ? true : false }));
        }
        
            setFormData((state) => ({ ...state, [name]: value }));
        
    }
    const isFormValid = Object.values(errors).every(x => x === false);

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
                        <NavLink activeClassName="current" exact to="/reservation/make" onClick={(e) => e.preventDefault()}>1. Find a table</NavLink>
                        <NavLink activeClassName="current" exact to="/reservation/details" onClick={(e) => e.preventDefault()}>2. Your details</NavLink>
                    </div>

                    <Route path="/reservation/make" component={MakeReservation}>
                        <MakeReservation onInputChangeHandler={onInputChangeHandler} formData={formData} />
                    </Route>
                    <Route path="/reservation/details" component={ReservationDetails}>
                        <ReservationDetails onInputChangeHandler={onInputChangeHandler} createReservation={createReservation} isFormValid={isFormValid} errors={errors} />
                    </Route>

                </article>



            </section>
        </main>
    )
}

export default Reservation;
