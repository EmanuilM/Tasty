import './OrderProduct.css';
import { Link } from 'react-router-dom';

const OrderProduct = ({orderID , orderDate , orderProductName , orderProductPrice , orderStatus}) => {
    return (
        <Link to={`/admin-panel/manage/order/details/${orderID}`}>
        <li>
            <p className="order-id">#{orderID}</p>
            <p className="order-date">{orderDate}</p>
            <p className="order-product-name">{orderProductName}</p>
            <p className="order-product-price">{orderProductPrice} $</p>
            <p className="order-status">
                    <i className={orderStatus === "Delivered" ? "fas fa-check delivered" : ""}></i>
                    <i className={orderStatus === "Cancalled" ? "far fa-times-circle cancalled" : ""}></i>
                    <i className={orderStatus === "Pending" ? "far fa-pause-circle pending" : ""}></i>
                {orderStatus}
            </p>
        </li>
        </Link>

    )
}

export default OrderProduct;