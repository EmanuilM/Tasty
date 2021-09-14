import './MakeReservation.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const MakeReservation = () => {
    return (
        <Fragment>
            <article className="reservation-select-menu">

                <select className="reservation-select">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                </select>

                <input type="date" className="reservation-date" />

                <select className="reservation-select">
                    <option>7 pm</option>
                    <option>8 pm </option>
                    <option>9 pm</option>
                </select>


                <button className="find-table-btn">Find table</button>
            </article>

            <article className="reservation-free-tables">
                <Link to="details">
                    <button className="free-reservation-btn">Example 1</button>
                </Link>
                <Link to="details">
                    <button className="free-reservation-btn">Example 2</button>
                </Link>
                <Link to="details">
                    <button className="free-reservation-btn">Example 3</button>
                </Link>
            </article>
        </Fragment>
    )
}

export default MakeReservation;