import './OrdersListItem.css';
import { useState, Fragment } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import { showAlert } from '../../../store/alert-slice';
import * as orderService from '../../../services/orderService';
import { addProduct } from '../../../store/order-slice';


const OrdersListItem = ({ productImage, productName, productDescription, productPrice, id }) => {

    const dispatch = useDispatch();

    const [isOrderPageActive, activeOrderPage] = useState(false);
    function showModal() {
        activeOrderPage(true);
    }
    function hideModal() {
        activeOrderPage(false);
    }
    function addItemToCart(id) {

        dispatch(loader());
        orderService.getProductByID(id)
            .then(res => {
                const data = {
                    _id: res._id,
                    productName: res.productName,
                    productPrice: res.productPrice,
                    images: res.images,
                    quantity: 1,
                    // subtotal : 0,
                    // discount : 0,
                    // totalPrice : 0,
                    // shipping : 0,

                };
                dispatch(loader());
                dispatch(addProduct(data));
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }

    return (
        <Fragment>
            <li>
                <section className="order-menu-list-item-wrapper">
                    <img src={productImage} alt="image" />
                    <div className="hide-order-menu-buttons">
                        <div className="order-menu-product-buttons-wrapper">
                            <button className="order-menu-product-add-to-card-button" onClick={() => addItemToCart(id)}>Add to card</button>
                            <button type="button" className="order-menu-product-quck-view-button" onClick={showModal}>Quick view</button>

                        </div>
                    </div>
                </section>
                <p className="order-menu-product-name">{productName}</p>
                <p className="order-menu-product-description">{productDescription}</p>
                <p className="order-menu-product-price">{productPrice} $</p>

            </li>

            <ProductDetails show={isOrderPageActive} handleClose={hideModal} />
        </Fragment>
    )
}

export default OrdersListItem;