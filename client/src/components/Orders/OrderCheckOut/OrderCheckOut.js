import { useEffect, useState } from 'react';
import './OrderCheckOut.css';
import { OrderItems } from './OrderItems/OrderItems';
import * as orderService from '../../../services/orderService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import { addProduct } from '../../../store/order-slice';
import { useAppSelector } from '../../../store/index';

const OrderCheckOut = ({ history }) => {
    const dispatch  = useDispatch();
    const orderState = useAppSelector(state => state.order);
    if (orderState?.length <= 0) {
        history.push('/order')
    }


    // const [shipping , setShipping] = useState();
  

    function makeOrder(e) { 
        e.preventDefault();
        const makeOrderFormFields = { 
            firstName : e.target.firstName.value,
            lastName : e.target.lastName.value,
            phoneNumber : Number(e.target.phoneNumber.value),
            houseNumber : e.target.houseNumber.value,
            street : e.target.street.value,
            flatNumber : e.target.flatNumber.value,
        }

        dispatch(loader());
        orderService.makeOrder(makeOrderFormFields , orderState)
        .then(res => { 
            dispatch(loader());
            console.log(res);
    
        })
        .catch(error => { 
            dispatch(loader());
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
                                    First Name
                                    <input type="text" name="firstName" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Name
                                    <input type="text" name="lastName" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number
                                    <input type="text" name="phoneNumber" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    House Number
                                    <input type="text" name="houseNumber" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Street
                                    <input type="text" name="street" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Flat number *
                                    <input type="text" name="flatNumber" />
                                </label>
                            </div>
                            <button className="make-order-button">Order now</button>
                        </form>
                    </article>
                </section>

                <section className="checkout-page-order-information-wrapper">
                    <section className="ordered-products-wrapper">
                        <article className="checkout-page-ordered-products">
                            <article className="ordered-products-section-wrapper">
                                <ul>

                                    {orderState?.map((x, i) => {
                                        return <OrderItems key={i} productName={x.productName} productPrice={x.productPrice} image={x.images[0].imageURL} quantity={x.quantity} id={x._id}  />
                                    })}

                                </ul>
                            </article>
                        </article>


                        <article className="checkout-page-discount-code">
                            <h3>Gift card / Discount code</h3>
                            <div>
                                <input type="text" placeholder="Enter your promo code" />
                                <button>Apply</button>
                            </div>
                        </article>

                        <article className="checkout-page-order-price-wrapper">
                            <div>
                                <p>Subtotal : </p>
                                <p>{orderState?.map(x => { 
                                    return x.quantity * x.productPrice;
                                    
                                })} $</p>
                            </div>
                            <div>
                                <p>Discount : </p>
                                <p>0.00 $</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>{orderState?.map(x => { 
                                     if (x.quantity * x.productPrice < 10) {
                                         return 7;
                                     }else {
                                         return 0;
                                     }
                                })} $</p>
                            </div>
                            <div>
                                <p>Total : </p>
                                <p>{orderState?.map(x => { 
                                    if(x.quantity * x.productPrice < 10)  { 
                                        return x.quantity * x.productPrice + 7;
                                    }else { 
                                        return x.quantity * x.productPrice + 0;
                                    }
                                })} $</p>
                            </div>
                        </article>

                    </section>
                </section>
            </section>
        </main>
    )
}
export default OrderCheckOut;