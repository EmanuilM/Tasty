import './ProfileDetails.css';

const ProfileDetails = ({ userData }) => {
    
    const reservations = userData.reservations ? [...userData.reservations].reverse().slice(0, 8) : [];

    return (
        <section className="my-profile-details-section-wrapper">
            <article className="my-profile-details-wrapper">
                <div className="my-profile-details-heading-wrapper">
                    <p>My profile details</p>
                </div>
                <article className="my-profile-details">
                    <h1>Bio Graph</h1>
                    <ul>
                        <li>
                            <span>First Name :</span>
                            <span>{userData.firstName || "None"}</span>
                        </li>
                        <li>
                            <span>Last Name :</span>
                            <span>{userData.lastName || "None"}</span>
                        </li>
                        <li>
                            <span>Phone number :</span>
                            <span>{userData.phoneNumber || "None"}</span>
                        </li>
                        <li>
                            <span>Email :</span>
                            <span>{userData.email}</span>
                        </li>
                    </ul>
                </article>

            </article>
                <h1 className="profile-reservation-heading">Last reservations</h1>
            <div className="reservatons-cards-wrapper">
                {reservations.map((x,i) => {
                    return <article className="reservation-card" key={i}>
                        <div>
                            <span>Name :</span>
                            <span>{x.firstName} {x.lastName}</span>
                        </div>
                        <p>People : {x.people}</p>
                        <p>Time : {x.time}</p>
                        <p>Date : {x.date}</p>
                    </article>
                })}

            </div>
        </section>
    )
}

export default ProfileDetails;