import './AllOrders.css';
import OrderProduct from '../OrderProduct/OrderProduct';
import { useEffect } from 'react';
import * as orderService from '../../../../services/orderService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import { useState } from 'react';
const AllOrders = () => {
    const dispatch = useDispatch();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        dispatch(loader());
        orderService.getAllOrders()
            .then(res => {
                dispatch(loader());
                setOrders(res);
            })
            .catch(error => {
                dispatch(loader());
            })

    }, [])
    return (
        <div className="manage-orders-list">
            <ul>
                {orders.map(x => {
                    return <OrderProduct
                        key={x._id}
                        orderID={x._id}
                        orderDate={x.orderCreated}
                        orderProductName={x.orderedProducts.length > 1 ? "Multiple products" : x.orderedProducts[0].productName}
                        orderProductPrice={x.totalPrice}
                        orderStatus={x.status} />
                })}

            </ul>
        </div>
    )
}

export default AllOrders;