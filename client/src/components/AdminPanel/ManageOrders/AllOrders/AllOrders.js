import './AllOrders.css';
import OrderProduct from '../OrderProduct/OrderProduct';
import { Fragment, useEffect } from 'react';
import * as orderService from '../../../../services/orderService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({ location }) => {
    const dispatch = useDispatch();

    const [orders, setOrders] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const page = location.search.split('=')[1];
        dispatch(loader());
        orderService.getAllOrders(page || 1, location.pathname.split('/orders/')[1])
            .then(([allOrders, filtaredOrders]) => {
                dispatch(loader());
                setOrders(filtaredOrders);
                setPages(Array.from({ length: Math.ceil(allOrders.length / 10) }, (v, i) => i + 1))
            })
            .catch(error => {
                dispatch(loader());
            })

    }, [location.search])

    console.log(orders)


    return (
        <Fragment>
            <div className="manage-orders-list">
                <ul>
                    {orders.length ? orders.map(x => {
                        return <OrderProduct
                            key={x._id}
                            orderID={x._id}
                            orderDate={x.orderCreated}
                            orderProductName={x.orderedProducts.length > 1 ? "Multiple products" : x.orderedProducts[0].productName}
                            orderProductPrice={x.totalPrice}
                            orderStatus={x.status} />
                    }) : <h1>There's no orders on this page yet!</h1>}

                </ul>

            </div>
            <ul className="admin-panel-orders-pagginator">
                {orders.length ? <li>
                    <Link to={`/admin-panel/manage/orders/${location.pathname.split('/orders/')[1]}?page=${Number(location.search.split('=')[1]) - 1 ? Number(location.search.split('=')[1]) - 1 : 1}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </li> : ""}


                {pages.map(x => {
                    return <li key={x}>
                        <Link to={`/admin-panel/manage/orders/${location.pathname.split('/orders/')[1]}?page=${x}`}>{x}</Link>
                    </li>
                })}
                {orders.length >= 10 ? <li><Link to={`/admin-panel/manage/orders/${location.pathname.split('/orders/')[1]}?page=${Number(location.search.split('=')[1]) + 1 ? Number(location.search.split('=')[1]) + 1 : 2}`}>
                    <i className="fas fa-arrow-right"></i>
                </Link></li> : ""}

            </ul>
        </Fragment>
    )
}

export default AllOrders;