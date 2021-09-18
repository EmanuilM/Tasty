import './Orders.css';
import image from '../../assets/menuImages/orderMenuImages/orderMenu.jpg'
import OrdersListItem from './OrdersListItem/OrdersListItem';
import { Link } from 'react-router-dom';

const Orders = () => {
    
    return (
        <main>
            <section className="order-menu-banner-wrapper">
                <h1>Make your order</h1>
            </section>
            <section className="order-menu-products-navigation">
                    <ul>
                        <li>
                            <Link to="">Category</Link>
                        </li>
                        <li>
                            <Link to="">Category</Link>
                        </li>
                        <li>
                            <Link to="">Category</Link>
                        </li>
                        
                     
                    </ul>
            </section>
            <section className="order-menu-page-wrapper">

                <section className="order-menu-wrapper">
                    <article className="order-menu-products">
                        <ul>
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                            <OrdersListItem productImage={image} productName="Mediterranean Pizza" productDescription="Ut enimex ea ad minim veniam, quis nostrud exercitation." productPrice="$6.25" />
                        </ul>
                    </article>

                </section>

            </section>

            <article className="order-menu-paggination">
                    <ul>
                        <li>
                            <i class="fas fa-arrow-left"></i>
                        </li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>
                        <i class="fas fa-arrow-right"></i>
                        </li>
                    </ul>
                </article>

        </main>
    )
}

export default Orders;