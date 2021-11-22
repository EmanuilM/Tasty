import './Orders.css';
import image from '../../assets/menuImages/orderMenuImages/orderMenu.jpg'
import OrdersListItem from './OrdersListItem/OrdersListItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as orderService from '../../services/orderService';
import { useDispatch } from 'react-redux';
import { loader } from '../../store/loader';
import { showAlert } from '../../store/alert-slice';
import { addProduct } from '../../store/order-slice';

const Orders = (props) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState()
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const page = props.location?.search.split('=')[1];
        let category = props.match.params.category;
        if (category !== undefined) {
            category = props.match.params.category[0].toUpperCase() + props.match.params.category.substring(1)
        }

        dispatch(loader());
        orderService.getAllProducts(category, page || 1)
            .then(([allProducts, filteredProducts]) => {
                dispatch(loader());
                setProducts(filteredProducts);
                setPages(Array.from({ length: Math.ceil(allProducts.length / 12) }, (v, i) => i + 1))
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert(error));
            })
    }, [props.location])

    return (
        <main>
            <section className="order-menu-banner-wrapper">
                <h1>Make your order</h1>
            </section>
            <section className="order-menu-products-navigation">
                <article className="order-menu-categories-wrapper">
                    <ul>
                        <li>
                            <Link to="/order">All products</Link>
                        </li>
                        <li>
                            <Link to="/order/categories/appetizers">Appetizers</Link>
                        </li>
                        <li>
                            <Link to="/order/categories/meat">Meat</Link>
                        </li>
                        <li>
                            <Link to="">Seafood</Link>
                        </li>
                        <li>
                            <Link to="">Salands</Link>
                        </li>
                        <li>
                            <Link to="">Pasta</Link>
                        </li>
                        <li>
                            <Link to="">Burgers</Link>
                        </li>
                        <li>
                            <Link to="">Desserts</Link>
                        </li>
                        <li>
                            <Link to="">Wines</Link>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="order-menu-page-wrapper">

                <section className="order-menu-wrapper">
                    <article className="order-menu-products">
                        <ul>
                            {products?.length >= 1 ? products.map(x => {

                                return <OrdersListItem key={x._id} productImage={x.images[0].imageURL} productName={x.productName} productDescription={x.productDescription} productPrice={x.productPrice} id={x._id} />
                            }) : ""}

                        </ul>
                    </article>

                </section>

            </section>

            <article className="order-menu-paggination">
                <ul>
                    {products?.length ?
                        <li>
                            <Link to={(props.match.params.hasOwnProperty('category') ? `${props.match.params.category}?page=${Number(props.location.search.split("=")[1] - 1) - 1 ? Number(props.location.search.split('=')[1]) - 1 : 1}` : props.location.search ? `/order?page=${Number(props.location.search.split("=")[1] - 1) ? Number(props.location.search.split("=")[1] - 1) : 1}` : `/order?page=1`)}>
                                <i className="fas fa-arrow-left"></i>
                            </Link>

                        </li> : ""}

                    {pages.map(x => {

                        return <li key={x}>
                            <Link to={props.match.params.hasOwnProperty('category') ? `${props.match.params.category}?page=${x}` : `/order?page=${x}`}>{x}</Link>

                        </li>
                    })}
                    {products?.length >= 12 ? <li>

                        <Link to={(props.match.params.hasOwnProperty('category') ? `${props.match.params.category}?page=${Number(props.location.search.split("=")[1]) + 1 ? Number(props.location.search.split('=')[1]) + 1 : 2}` : props.location.search ? `/order?page=${Number(props.location.search.split("=")[1]) + 1}` : `/order?page=2`)}>
                            <i className="fas fa-arrow-right"></i>
                        </Link>

                    </li> : ""}

                </ul>
            </article>
        </main>
    )
}

export default Orders;