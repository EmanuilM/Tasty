import './Menu.css';
import salads from '../../assets/menuImages/mainMenuImages/salads.jpg';
import appetizers from '../../assets/menuImages/mainMenuImages/appetizers.jpg';
import meatDishes from '../../assets/menuImages/mainMenuImages/meatDishes.jpg';
import seaFood from '../../assets/menuImages/mainMenuImages/seaFood.jpg';
import soup from '../../assets/menuImages/mainMenuImages/soup.jpg';
import pasta from '../../assets/menuImages/mainMenuImages/pasta.jpg';
import dessert from '../../assets/menuImages/mainMenuImages/dessert.jpg';
import wine from '../../assets/menuImages/mainMenuImages/wine.jpg';
import coctail from '../../assets/menuImages/mainMenuImages/coctail.jpg';
import burger from '../../assets/menuImages/mainMenuImages/burger.jpg';
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
                                    <img src={appetizers} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Appetizers</p>
                            </li>

                            <li>
                                <Link to="/menu/categories/meat-dishes">
                                    <img src={meatDishes} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Meat Dishes</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/sea-food">
                                    <img src={seaFood} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Seafood</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/soups">
                                    <img src={soup} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Soups</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/salads">
                                    <img src={salads} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Salads</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/pasta">
                                    <img src={pasta} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Pasta</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/burgers">
                                    <img src={burger} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Burgers</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/desserts">
                                    <img src={dessert} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Desserts</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/wines">
                                    <img src={wine} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Wines</p>
                            </li>
                            <li>
                                <Link to="/menu/categories/coctails">
                                    <img src={coctail} alt="image" />
                                </Link>
                                <p className="main-menu-categories-name">Coctails</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    )

}

export default Menu;