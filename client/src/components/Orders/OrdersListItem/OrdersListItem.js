import './OrdersListItem.css';

const OrdersListItem = ({ productImage , productName , productDescription , productPrice}) => {
    return (
        <li>
           <section className="order-menu-list-item-wrapper">
            <img src={productImage} alt="image" />
            <p className="order-menu-product-name">{productName}</p>
            <p className="order-menu-product-description">{productDescription}</p>
            <p className="order-menu-product-price">{productPrice}$</p>
            <div className="hide-order-menu-buttons">
            <div className="order-menu-product-buttons-wrapper">
            <button className="order-menu-product-add-to-card-button">Add to card</button>
            <button className="order-menu-product-quck-view-button">Quick view</button>
            </div>
            </div>
            </section>
        </li>
    )
}

export default OrdersListItem;