import './ProductDetails.css';
import image from '../../../assets/menuImages/orderMenuImages/orderMenu.jpg';


const ProductDetails = ({ handleClose, show, children }) => {
    console.log(handleClose);
    const showDetails = show ? "modal display-block" : "modal display-none";
    return (
        <section className={showDetails}>
            <section className="order-menu-product-details-page-wrapper">
             <i class="fas fa-times order-menu-close" onClick={handleClose}></i>

                    <img src={image} alt="image" />

                <article className="order-menu-product-details">
                    <h3>MEDITERRANEAN SHRIMP PIZZA</h3>
                        <div className="order-details-product-price">
                            <p>Price : </p>
                            <p>8.70$</p>
                        </div>
                        <div className="order-menu-product-size">
                            <p>Size : </p>
                            <label>
                                <input type="checkbox" />
                                25cm(250g)
                            </label>
                            <label>
                                <input type="checkbox" />
                                30cm(300g)
                            </label>
                            <label>
                                <input type="checkbox" />
                                40cm(550g)
                            </label>
                        </div>
                        <p className="order-menu-product-details-descrption">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null eiusmod tempor incididunt ut labore tore veritatis</p>
                        <div className="order-menu-product-quantity-and-button">
                            <p>Quantity : </p>
                            <input type="number" value="1" />
                            <button className="order-menu-add-to-cart-button">Add to cart</button>
                        </div>
                </article>
            </section>
        </section>
    )
}

export default ProductDetails;