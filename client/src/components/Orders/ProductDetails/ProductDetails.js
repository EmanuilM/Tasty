import './ProductDetails.css';
import image from '../../../assets/menuImages/orderMenuImages/orderMenu.jpg';
import * as orderService from '../../../services/orderService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/order-slice';


const ProductDetails = ({ handleClose, show, children, id }) => {
    const showDetails = show ? "modal display-block" : "modal display-none";
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        orderService.getProductByID(id)
            .then(res => {
                setImages(res.images);
                setProduct(res);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    function getNextImage() {
        setCurrentImage((state) => state >= images.length - 1 ? state : state + 1);
    }

    function getPreviousImage() {
        setCurrentImage((state) => state <= 0 ? state : state - 1);
    }

    function addProductToCart(e) {
        e.preventDefault();
        const data = {
            _id: id,
            productName: product.productName,
            productPrice: product.productPrice,
            images: product.images,
            quantity: Number(e.target.quantity.value),
        };
        dispatch(addProduct(data));
        handleClose();
        
    }


    return (
        <section className={showDetails}>
            <section className="order-menu-product-details-page-wrapper">
                <i className="fas fa-times order-menu-close" onClick={handleClose}></i>
                <div className="product-details-image-wrapper">
                    {images.length > 1 ? <i className="fas fa-angle-left slide-image-left" onClick={getPreviousImage}></i> : ""}
                    <img src={images[currentImage]?.imageURL} alt="image" />
                    {images.length > 1 ? <i className="fas fa-angle-right slide-image-right" onClick={getNextImage}></i> : ""}


                </div>
                <article className="order-menu-product-details">
                    <h3>{product.productName}</h3>
                    <div className="order-details-product-price">
                        <p>Price : </p>
                        <p>{product.productPrice}$</p>
                    </div>

                    <p className="order-menu-product-details-descrption">{product.productDescription}</p>
                    <form onSubmit={addProductToCart}>
                        <div className="order-menu-product-quantity-and-button">
                            <p>Quantity : </p>
                            <input type="number" min="1" defaultValue="1" name="quantity" />
                            <button className="order-menu-add-to-cart-button">Add to cart</button>
                        </div>
                    </form>
                </article>
            </section>
        </section>
    )
}

export default ProductDetails;