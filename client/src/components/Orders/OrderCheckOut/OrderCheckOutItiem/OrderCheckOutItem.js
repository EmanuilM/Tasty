import './OrderCheckOutItem.css';

 export const OrderCheckOutItem = ({name , items , price}) => {
    return (
        <li>
            <h3 className="order-check-out-item">{name}</h3>
            <p className="order-check-out-item">{items} items</p>
            <p className="order-check-out-item">{price}$</p>
        </li>
    )
}



