import './OrderDetails.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import * as orderService from '../../../../services/orderService';
import { useState } from 'react';
import DeleteModal from '../../../shared/DeleteModal/DeleteModal';

const OrderDetails = ({ match, history }) => {
    const dispatch = useDispatch();
    const [orderDetails, setOrderDetails] = useState([]);
    const [isDeleteModalActive, setDeleteModal] = useState(false);
    const [showChangeStatus, setChangeStatus] = useState(false);
    let subtotal = 0;
    useEffect(() => {
        dispatch(loader());
        orderService.getOrderByID(match.params.id)
            .then(res => {
                dispatch(loader());
                setOrderDetails(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }, [])


    function show() {
        setChangeStatus((state) => !state);
    }

    function showDeleteModal() {
        setDeleteModal(true);
    }

    function hideDeleteModal() {
        setDeleteModal(false);
    }

    function deleteOrder() {
        dispatch(loader());
        orderService.deleteOrderByID(match.params.id)
            .then(res => {
                dispatch(loader());
                history.push('/admin-panel/manage/orders/all-orders');
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }

    function updateOrder(e) {
        e.preventDefault();
        dispatch(loader());
        orderService.updateOrder(match.params.id, e.target.orderStatus.value)
            .then(res => {
                dispatch(loader());
                history.push('/admin-panel/manage/orders/all-orders')
            })
            .catch(error => {
                dispatch(loader());
            })
    }

    

    return (
        <section className="admin-panel-orders-details">
            <h1>Order Number <span>#{orderDetails._id}</span></h1>
            <div className="order-details-buttons-wrapper">
                <button className="change-order-status-button" onClick={show}>Change order status</button>
                <button className="delete-order-button" onClick={showDeleteModal}>Delete order</button>
            </div>

            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} text="order" deleteItem={deleteOrder} />
            {showChangeStatus ? <div className="order-details-change-order-status-wrapper" >
                <h3>Change order status</h3>
                <form onSubmit={updateOrder}>
                    <select name="orderStatus">
                        <option>Pending</option>
                        <option>Delivered</option>
                        <option>Cancalled</option>
                    </select>
                    <button className="change-order-status">Change status</button>
                </form>
            </div> : ""}


            <section className="order-details-wrapper">
                <section className="order-products-and-customer-information-wrapper">
                    <article className="ordered-products-list">
                        <div className="ordered-products-list-headings">
                            <p>Items summary</p>
                            <p>QTY</p>
                            <p>Product price</p>
                            <p>Total price</p>
                        </div>

                        {orderDetails.orderedProducts?.map(x => {
                            return <div key={x._id} className="ordered-products">
                                <p>{x.productName}</p>
                                <p>x {x.quantity}</p>
                                <p>{x.productPrice} $</p>
                                <p>{x.productPrice * x.quantity} $</p>
                            </div>
                        })}


                    </article>

                    <article className="customer-and-order-details">
                        <h1>Customer and order details</h1>
                        <div className="order-product-and-customer-details">
                            <div>
                                <h3>Customer name:</h3>
                                <p>{orderDetails.firstName + ' ' + orderDetails.lastName}</p>
                            </div>
                            <div>
                                <h3>Phone Number:</h3>
                                <p>{orderDetails.phoneNumber}</p>
                            </div>
                            <div>
                                <h3>Type:</h3>
                                <p>Delivery</p>
                            </div>
                            <div>
                                <h3>Note:</h3>
                                <p>{orderDetails.note ? orderDetails.note : "N/A"}</p>
                            </div>
                        </div>
                    </article>

                </section>


                <section className="order-details-information">
                    <article className="order-summary">
                        <h1>Order summary</h1>
                        <div>
                            <h3>Order Created:</h3>
                            <p>{orderDetails.orderCreated}</p>
                        </div>
                      
                        <div>
                            <h3>Subtotal:</h3>
                            <p>{orderDetails.orderedProducts?.map(x => { 
                                subtotal += Number(x.productPrice) * Number(x.quantity)
                            })} {(subtotal).toFixed(2)}$</p>
                        </div>
                        <div>
                            <h3>Shipping:</h3>
                            <p>{orderDetails.shipping}$</p>
                        </div>
                        <div>
                            <h3>Discount:</h3>
                            <p>{orderDetails.discount?.toFixed(2)}$</p>
                        </div>
                        <div>
                            <h3>Total:</h3>
                            <p>{orderDetails.totalPrice}$</p>
                        </div>
                    </article>

                    <article className="order-delivery-details">
                        <h1>Delivery Adress</h1>
                        <div>
                            <h3>Street name:</h3>
                            <p>{orderDetails.street}</p>
                        </div>
                        <div>
                            <h3>House number :</h3>
                            <p>{orderDetails.houseNumber}</p>
                        </div>
                        <div>
                            <h3>Flat/Building name:</h3>
                            <p>{orderDetails.flatNumber ? orderDetails.flatNumber : "None"}</p>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    )
}

export default OrderDetails;