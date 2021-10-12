import './MenuListItem.css';

const MenuListItem = ({itemName , price , description}) => {
    return (
        <li>
            <div className="productName-and-productPrice-wrapper">
                <h4 className="onHoverEffect">{itemName}</h4>
                <h4 className="product-price">{price}$</h4>
            </div>
            <div className="product-ingredients">
                <p>{description}</p>
            </div>
        </li>
    )
}


export default MenuListItem;