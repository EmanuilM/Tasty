import './OrderItems.css';

 export const OrderItems = ({name , items , price}) => {
    return (
        <li>
            <h3 className="order-check-out-item check-out-item-name">{name}</h3>
            <p className="order-check-out-item">{items} items</p>
            <p className="order-check-out-item">{price}$</p>
            <i className="fas fa-times"></i>
        </li>
    )
}



