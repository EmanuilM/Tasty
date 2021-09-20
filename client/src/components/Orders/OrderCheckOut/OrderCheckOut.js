import './OrderCheckOut.css';
import { OrderCheckOutItem } from './OrderCheckOutItiem/OrderCheckOutItem';

const OrderCheckOut = ({ currentCheckOutItems }) => {
    return (
        <main>
            <section className="order-check-out-page-wrapper">
                <h1>Check Out</h1>
                <section className="order-check-out-page-details">
                    <article className="order-check-out-order-items">
                        <ul>
                            <h3>Your Order</h3>
                           <OrderCheckOutItem name="Mediterranean Shrimp Pizza" items="3" price="16.80" / >
                           <OrderCheckOutItem name="Mediterranean Shrimp Pizza" items="3" price="16.80" / >
                           <OrderCheckOutItem name="Mediterranean Shrimp Pizza" items="3" price="16.80" / >
                        </ul>
                        <article className="order-check-out-total-price-wrapper">
                            <div className="check-out-total-row">
                                <h3>Cart total : </h3>
                                <p>19.30$</p>
                            </div>
                            <div className="check-out-total-row">
                                <h3>Delivery : </h3>
                                <p>Free</p>
                            </div>
                            <div className="check-out-total-row">
                                <h3>Total : </h3>
                                <p>30.00$</p>
                            </div>

                        </article>
                    </article>


                    <article className="order-check-out-details">
                        <h3>Your Info</h3>
                        <form>
                            <div className="order-details-row">
                                <input type="text" placeholder="First name *" />
                                <input type="text" placeholder="Last name *" />
                            </div>
                            <div className="order-details-row">
                                <input type="text" placeholder="Phone *" />
                                <input type="text" placeholder="House number *" />
                            </div>
                            <div className="order-details-row">
                                <input type="text" placeholder="Street *" />
                                <input type="text" placeholder="Flat number *" />
                            </div>
                        </form>
                        <div className="check-out-buttons">
                            <button className="back-to-order-btn">Back to order</button>
                            <button className="check-out-btn">Check out</button>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}
export default OrderCheckOut;