import { useEffect, useState } from 'react';
import './OrderCheckOut.css';
import { OrderItems } from './OrderItems/OrderItems';
import * as orderService from '../../../services/orderService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import { clearOrderState } from '../../../store/order-slice';
import { useAppSelector } from '../../../store/index';
import * as discountService from '../../../services/discountService';

const OrderCheckOut = ({ history }) => {
    const dispatch = useDispatch();
    const orderState = useAppSelector(state => state.order);
    const [discount , setDiscount] = useState(0);

    if (orderState?.length <= 0) {
        history.push('/order')
    }
    let subtotal = 0;
    let shipping = 7;
    let total = 0;

    orderState?.map(x => {
        subtotal += x.productPrice * x.quantity;
        shipping = subtotal >= 10 ? shipping = 0 : shipping = 7;
        total = (subtotal + shipping) -  discount;
    })

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        houseNumber: false,
        street: false,
    });

    const [fields, setFileds] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        houseNumber: '',
        street: '',
    });

    function onInputChangeHandler(e) {
        const { name, value } = e.target;
        if (name === 'firstName' || name === 'lastName' || name === 'houseNumber' || name === 'street') {
            setErrors((state) => ({ ...state, [name]: value === '' ? true : false }));
        }
        if (name === 'phoneNumber') {
            setErrors((state) => ({ ...state, [name]: value.length < 10 || value.length > 10 ? true : false }));
        }
        setFileds((state) => ({ ...state, [name]: value }));
    }

    const isFormValid = Object.values(fields).every(x => x !== '') && Object.values(errors).every(x => x === false);

    async function makeOrder(e) {
        e.preventDefault();
        const makeOrderFormFields = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            phoneNumber: Number(e.target.phoneNumber.value),
            houseNumber: e.target.houseNumber.value,
            street: e.target.street.value,
            flatNumber: e.target.flatNumber.value,
            shipping: shipping,
            totalPrice: total,
            discount: discount,
            note : e.target.note.value,
        }

        dispatch(loader());
        orderService.makeOrder(makeOrderFormFields, orderState)
            .then(res => {
                dispatch(loader());
                dispatch(clearOrderState());
                history.push('/order');
                console.log(res);

            })
            .catch(error => {
                dispatch(loader());
                console.log(error);

            })
    }

    async function checkPromoCode(e) {
        e.preventDefault();
        discountService.checkPromoCode(e.target.promoCode.value)
        .then(res => {
            setDiscount(res.percent ? (res.percent / 100) * subtotal + shipping : 0);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <main>
            <section className="order-page-wrapper">
                <section className="checkout-order-details-wrapper">
                    <article className="order-checkout-details">
                        <h1>Order Details</h1>
                        <form onSubmit={makeOrder}>
                            <div>
                                <label>
                                    First Name * 
                                    <input type="text" name="firstName" onChange={onInputChangeHandler} />
                                    <div className="form-error-message">
                                        {errors.firstName ? <small>First name is required!</small> : ""}

                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Name *
                                    <input type="text" name="lastName" onChange={onInputChangeHandler} />
                                    <div className="form-error-message">
                                        {errors.lastName ? <small>Last name is required!</small> : ""}
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number *
                                    <input type="text" name="phoneNumber" onChange={onInputChangeHandler} />
                                    <div className="form-error-message">
                                        {errors.phoneNumber ? <small>Phone number is must be exactly 10 characters long!</small> : ""}
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    House Number *
                                    <input type="text" name="houseNumber" onChange={onInputChangeHandler} />
                                    <div className="form-error-message">
                                        {errors.houseNumber ? <small>House number is required!</small> : ""}
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Street *
                                    <input type="text" name="street" onChange={onInputChangeHandler} />
                                    <div className="form-error-message">
                                        {errors.street ? <small>House number is required!</small> : ""}
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Flat number
                                    <input type="text" name="flatNumber" />
                                </label>
                            </div>
                            <div>
                            <label>
                                Leave a note
                            <textarea name="note" className="order-checkout-note"></textarea>
                            </label>
                            </div>
                            <button className="make-order-button" disabled={!isFormValid}>Order now</button>


                        </form>
                    </article>
                </section>

                <section className="checkout-page-order-information-wrapper">
                    <section className="ordered-products-wrapper">
                        <article className="checkout-page-ordered-products">
                            <article className="ordered-products-section-wrapper">
                                <ul>

                                    {orderState?.map((x, i) => {
                                        return <OrderItems key={i} productName={x.productName} productPrice={x.productPrice} image={x.images[0].imageURL} quantity={x.quantity} id={x._id} />
                                    })}

                                </ul>
                            </article>
                        </article>


                        <article className="checkout-page-discount-code">
                            <h3>Gift card / Discount code</h3>
                            <div>
                                <form onSubmit={checkPromoCode}>
                                    <input type="text" placeholder="Enter your promo code" name="promoCode" />
                                    <button>Apply</button>
                                </form>
                            </div>

                        </article>

                        <article className="checkout-page-order-price-wrapper">
                            <div>
                                <p>Subtotal : </p>
                                <p>{subtotal} $</p>
                            </div>
                            <div>
                                <p>Discount : </p>
                                <p>{discount.toFixed(2)} $</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>{shipping} $</p>
                            </div>
                            <div>
                                <p>Total : </p>
                                <p>{total} $</p>
                            </div>
                        </article>

                    </section>
                </section>
            </section>
        </main>
    )
}
export default OrderCheckOut;