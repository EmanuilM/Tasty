import './MenuListItem.css';

const MenuListItem = ({itemName , price , ingredients}) => {
    return (
        <li>
            <div className="productName-and-productPrice-wrapper">
                <h4 className="onHoverEffect">{itemName}</h4>
                <h4 className="product-price">{price}$</h4>
            </div>
            <div className="product-ingredients">
                <p>{ingredients}</p>
            </div>
        </li>
    )
}


export default MenuListItem;