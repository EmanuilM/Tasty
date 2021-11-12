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


const ProductCategories = ({match , location}) => {
    console.log(location)
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page'));
    

    useEffect(() => {
        dispatch(loader());
        menuService.getProductsByMenuCategory(match.params.category[0].toUpperCase() + match.params.category.substring(1) , page)
            .then(res => {
                dispatch(loader());
                setProducts(res);
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert());
                console.log(error);
            })
      
    }, [])





    return (
        <main>
            <section className="main-product-categories-page-wrapper">
                <article className="main-menu-banner-wrapper">
                    <h1>{match.params.products}</h1>
                </article>

                <article className="main-menu-products">
                    <ul>
                        {products.map(x => {
                            return <MainMenuProduct key={x._id} productName={x.productName} price={x.productPrice} image={x.images[0].imageURL} ingredients={x.productDescription} />
                        })}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                        {/* <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" /> */}
                    </ul>
                </article>
                <article className="main-menu-paggination">
                    <ul>
                        <li>
                            <i className="fas fa-arrow-left"></i>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=1`}>1</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=2`}>2</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=3`}>3</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=4`}>4</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=5`}>5</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=6`}>6</Link>
                        </li>
                        <li>
                            <Link to={`/menu/categories/${match.params.category}?page=7`}>7</Link>
                        </li>
                        <li>
                            <i className="fas fa-arrow-right"></i>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default ProductCategories;