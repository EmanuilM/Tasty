import './OrderCheckOut.css';
import { OrderItems } from './OrderItems/OrderItems';

const OrderCheckOut = ({ currentCheckOutItems }) => {
    return (
        <main>
            <section className="order-check-out-page-wrapper">
                <h1>Check Out</h1>
                <section className="order-check-out-page-details">
                    <article className="order-check-out-order-items">
                        <ul>
                            <h3>Your Order</h3>
                            {currentCheckOutItems.map((x, i) => {
                                console.log(x)
                                return <OrderItems key={i} name={x.productName} items="3" price={x.productPrice} />
                            })}

                        </ul>
                        <article className="order-check-out-total-price-wrapper">
                            <div className="check-out-total-row">
                                <h3>Cart total : </h3>
                                <p>0$</p>
                            </div>
                            <div className="check-out-total-row">
                                <h3>Delivery : </h3>
                                <p>FREE</p>
                            </div>
                            <div className="check-out-total-row">
                                <h3>Total : </h3>
                                <p>0$</p>
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