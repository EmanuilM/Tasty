import './Reservation.css';
import { Route, NavLink } from 'react-router-dom';
import MakeReservation from './MakeReservation/MakeReservation';
import ReservationDetails from './ReservationDetails/ReservationDetails';


const Reservation = () => {

    return (
        <main>
            <section className="reservation-page-wrapper">
                <article className="reservation-page-content">
                    <div className="navigation-headings">
                        <NavLink activeClassName="current" exact to="/reservation/make">1. Find a table</NavLink>
                        <NavLink activeClassName="current" exact to="/reservation/details">2. Your details</NavLink>
                    </div>

                    <Route path="/reservation/make" component={MakeReservation} />
                    <Route path="/reservation/details" component={ReservationDetails} />

                </article>



            </section>
        </main>
    )
}

export default Reservation;
