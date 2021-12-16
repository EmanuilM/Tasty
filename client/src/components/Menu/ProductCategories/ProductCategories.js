import './ProductCategories.css';
import MainMenuProduct from './MainMenuProduct/MainMenuProduct';
import image from '../../../assets/menuImages/mainMenuImages/pizzaImage.png';
import * as menuService from '../../../services/menuService';
import { useDispatch } from 'react-redux';
import { } from '../../../'
import { loader } from '../../../store/loader';
import { useEffect } from 'react';
import { showAlert } from '../../../store/alert-slice';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';


const ProductCategories = ({ match, location }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);



    useEffect(() => {
        const page = location.search.split('=')[1];
        dispatch(loader());
        menuService.getProductsByMenuCategory(match.params.category[0].toUpperCase() + match.params.category.substring(1), page || 1)
            .then(([allProducts, filteredProducts]) => {
                dispatch(loader());
                setProducts(filteredProducts);
                setPages(Array.from({ length: Math.ceil(allProducts.length / 9) }, (v, i) => i + 1))
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert());
                console.log(error);
            })

    }, [location.search])

    return (
        <main>
            <section className="main-product-categories-page-wrapper">
                <article className="main-menu-banner-wrapper">
                    <h1>{match.params.category.slice(0, 1).toUpperCase() + match.params.category.slice(1)}</h1>
                </article>

                <article className="main-menu-products">
                    <ul>
                        {products.length <= 0 ? <h1>There's no products</h1> : products.map(x => {
                            return <MainMenuProduct key={x._id} productName={x.productName} price={x.productPrice} image={x.images[0]?.imageURL} ingredients={x.productDescription} />
                        })}
                    </ul>
                </article>
                <article className="main-menu-paggination">
                    <ul>
                        {products.length ? <li>
                            <Link to={`/menu/categories/${match.params.category}?page=${Number(location.search.split('=')[1]) - 1 ? Number(location.search.split('=')[1]) - 1 : 1}`}>
                                <i className="fas fa-arrow-left"></i>
                            </Link>

                        </li> : ""}

                        {pages.map(x => {
                            return <li key={x}>
                                <Link to={`/menu/categories/${match.params.category}?page=${x}`}>{x}</Link>
                            </li>
                        })}
                        {products.length >= 9 ? <li>
                            <Link to={`/menu/categories/${match.params.category}?page=${Number(location.search.split('=')[1]) + 1 ? Number(location.search.split('=')[1]) + 1 : 2}`}>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </li> : ""}

                    </ul>
                </article>
            </section>
        </main>
    )
}

export default ProductCategories;