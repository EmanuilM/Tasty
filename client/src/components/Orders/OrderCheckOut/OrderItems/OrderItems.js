import { useDispatch } from 'react-redux';
import './OrderItems.css';
import { addProduct, increateProductQuantity, removeProduct , decreseProductQuantity } from '../../../../store/order-slice';
import { loader } from '../../../../store/loader';
import * as orderService from '../../../../services/orderService';



export const OrderItems = ({ productName, productPrice, image, quantity ,  id }) => {
    const dispatch = useDispatch();

    function removeProductFromShoppingCart(id) {
      dispatch(removeProduct(id));
    }
    
    return (
        <article className="checkout-page-ordered-product-wrapper">
            <img src={image} alt="image" />
            <div>
                <p>{productName}</p>
                <div className="checkout-page-remove-add-product-buttons-wrapper">
                    <button onClick={() => dispatch(decreseProductQuantity(id))}>-</button>
                    <p className="checkout-page-product-quantity">{quantity}</p>
                    <button onClick={() => dispatch(increateProductQuantity(id))}>+</button>
                    <p className="checkout-page-product-price">x {(productPrice * quantity).toFixed(2)} $</p>
                </div>
            </div>
            <i className="fas fa-times checkout-page-remove-product" onClick={() => removeProductFromShoppingCart(id)}></i>

        </article>
    )
}



