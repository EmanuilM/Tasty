import './ReservationDetails.css';

const ReservationDetails = () => {
    return (
        <article className="reservation-details-wrapper">
            <form>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Phone number" />
                <button className="confirm-reservation-btn">Confirm reservation</button>
            </form>

        </article>
    )
}


export default ReservationDetails;