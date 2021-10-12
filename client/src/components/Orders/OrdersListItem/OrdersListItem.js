import './OrdersListItem.css';
import { useState  , Fragment} from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';


const OrdersListItem = ({ productImage , productName , productDescription , productPrice , addToCart}) => {
    const [isOrderPageActive , activeOrderPage] = useState(false);
    function showModal() { 
        activeOrderPage(true);
    }
    function hideModal() { 
        activeOrderPage(false);
    }
    function addItemToCart () { 
        addToCart(oldState => [...oldState , {productName , productPrice}]);
    }

    return (
        <Fragment>
        <li>
           <section className="order-menu-list-item-wrapper">
            <img src={productImage} alt="image" />
            <div className="hide-order-menu-buttons">
            <div className="order-menu-product-buttons-wrapper">
            <button className="order-menu-product-add-to-card-button" onClick={addItemToCart}>Add to card</button>
            <button type="button" className="order-menu-product-quck-view-button" onClick={showModal}>Quick view</button>
            
            </div>
            </div>
            </section>
            <p className="order-menu-product-name">{productName}</p>
            <p className="order-menu-product-description">{productDescription}</p>
            <p className="order-menu-product-price">{productPrice}$</p>
           
        </li>

        <ProductDetails show={isOrderPageActive} handleClose={hideModal} / > 
        </Fragment>
    )
}

export default OrdersListItem;