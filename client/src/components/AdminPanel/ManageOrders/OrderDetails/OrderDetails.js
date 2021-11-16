import './OrderDetails.css';

const OrderDetails = () => {
    return (
        <section className="admin-panel-orders-details">
            <h1>Order Number <span>#123123123</span></h1>
            <section className="order-details-wrapper">
                <section className="order-products-and-customer-information-wrapper">
                    <article className="ordered-products-list">
                        <div className="ordered-products-list-headings">
                            <p>Items summary</p>
                            <p>QTY</p>
                            <p>Price</p>
                            <p>Total price</p>
                        </div>
                        <div className="ordered-products">
                            <p>Product name</p>
                            <p>x 3</p>
                            <p>130 $</p>
                            <p>130 $</p>
                        </div>
                        <div className="ordered-products">
                            <p>Product name</p>
                            <p>x 3</p>
                            <p>130 $</p>
                            <p>130 $</p>
                        </div>
                        <div className="ordered-products">
                            <p>asdasdasdasdasdasdasdasd</p>
                            <p>x 3</p>
                            <p>130 $</p>
                            <p>130 $</p>
                        </div>
                    </article>

                    <article className="customer-and-order-details">
                        <h1>Customer and order details</h1>
                        <div className="order-product-and-customer-details">
                            <div>
                                <h3>Customer name:</h3>
                                <p>Name</p>
                            </div>
                            <div>
                                <h3>Phone Number:</h3>
                                <p>0000000000</p>
                            </div>
                            <div>
                                <h3>Type:</h3>
                                <p>Delivery</p>
                            </div>
                            <div>
                                <h3>Note:</h3>
                                <p>N/A</p>
                            </div>
                        </div>
                    </article>

                </section>


                <section className="order-details-information">
                    <article className="order-summary">
                        <h1>Order summary</h1>
                        <div>
                            <h3>Order Created:</h3>
                            <p>Date</p>
                        </div>
                        <div>
                            <h3>Order time:</h3>
                            <p>asdasdasd</p>
                        </div>
                        <div>
                            <h3>Total:</h3>
                            <p>130$</p>
                        </div>
                    </article>

                    <article className="order-delivery-details">
                        <h1>Delivery Adress</h1>
                        <div>
                            <h3>Adress line :</h3>
                            <p>asdasdasd</p>
                        </div>
                        <div>
                            <h3>Flat/Building name:</h3>
                            <p>asdasdasd</p>
                        </div>
                        <div>
                            <h3>Street name:</h3>
                            <p>asdasdasd</p>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    )
}

export default OrderDetails;