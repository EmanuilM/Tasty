import './AllOrders.css';
import OrderProduct from '../OrderProduct/OrderProduct';

const AllOrders = () => {
    return (
        <div className="manage-orders-list">
            <ul>
                <OrderProduct orderID={"123"} orderDate={789} orderProductName={"asdasdasd"} orderProductPrice={30} orderStatus={"Delivered"} />
                <OrderProduct orderID={"123"} orderDate={789} orderProductName={"asdasdasd"} orderProductPrice={30} orderStatus={"Cancalled"} />
                <OrderProduct orderID={"123"} orderDate={789} orderProductName={"asdasdasd"} orderProductPrice={30} orderStatus={"Pending"} />
            </ul>
        </div>
    )
}

export default AllOrders;