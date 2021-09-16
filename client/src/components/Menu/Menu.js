import './Menu.css';
import image from '../../assets/menuImages/saladImage.jpg';
import { Link, Route } from 'react-router-dom';

const Menu = () => {
    return (

        <main>

            <section className="main-menu-wrapper">
                <h1>MENU CATEGORIES</h1>
                <article className="main-menu-categories">
                    <div className="main-menu-ul-wrapper">
                        <ul>
                            <li>
                                <Link to="/menu/categories/appetizers" >
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Appetizers</p>
                            </li>

                            <li>
                                <Link to="/menu/categories/meat-dishes">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Meat Dishes</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/sea-food">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Seafood</p>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Fish Dishes</p>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Soups</p>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Salads</p>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={image} alt="image" />
                                </Link>
                                <p>Pasta</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    )

}

export default Menu;