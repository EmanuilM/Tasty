import './ReservationDetails.css';


const ReservationDetails = ({ onInputChangeHandler, createReservation, isFormValid , errors }) => {

    return (
        <article className="reservation-details-wrapper">
            <form>
                <input type="text" placeholder="First name" name="firstName" onChange={onInputChangeHandler} />
                <input type="text" placeholder="Last name" name="lastName" onChange={onInputChangeHandler} />
                <input type="text" placeholder="Phone number" name="phoneNumber" onChange={onInputChangeHandler} />
                <button className="confirm-reservation-btn" onClick={createReservation} disabled={!isFormValid}>Confirm reservation</button>
            </form>

        </article>
    )
}


export default ReservationDetails;