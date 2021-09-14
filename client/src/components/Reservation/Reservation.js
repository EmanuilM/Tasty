import './Reservation.css';
import { useState } from 'react';

const Reservation = () => {
    const [view , setView] = useState('find-table');
    const changeView = () => { 
        setView('your-details');
    }
    console.log(view)
    if(view === 'find-table') { 

    return (
        <main>
            <section className="reservation-page-wrapper">
                <article className="reservation-page-content">
                    <div className="navigation-headings">
                        <span>1. Find a table</span>
                        <span>2. Your details</span>
                    </div>
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
                        <button className="free-reservation-btn" onClick={() => changeView()}>Example 1</button>
                        <button className="free-reservation-btn">Example 2</button>
                        <button className="free-reservation-btn">Example 3</button>

                    </article>

                </article>



            </section>
        </main>
    )
    }else { 
        return (
            <main>
            <section className="reservation-page-wrapper">
                <article className="reservation-page-content">
                    <div className="navigation-headings">
                        <span>1. Find a table</span>
                        <span>2. Your details</span>
                    </div>
    
    
                    <article className="reservation-details-wrapper">
                        <form>
                            <input type="text" placeholder="First name" />  
                            <input type="text" placeholder="Last name" />  
                            <input type="text" placeholder="Phone number" />
                            <button className="confirm-reservation-btn">Confirm reservation</button>
                        </form>
                      
                    </article>
                </article>
            </section>
        </main>
        )
    }
}

export default Reservation;
