import './ManageMenu.css';
import { Link } from 'react-router-dom';

import salads from '../../../assets/menuImages/mainMenuImages/wine.jpg';
import appetizers from '../../../assets/menuImages/mainMenuImages/appetizers.jpg';
import meatDishes from '../../../assets/menuImages/mainMenuImages/meatDishes.jpg';
import seaFood from '../../../assets/menuImages/mainMenuImages/seaFood.jpg';
import soup from '../../../assets/menuImages/mainMenuImages/soup.jpg';
import pasta from '../../../assets/menuImages/mainMenuImages/pasta.jpg';
import dessert from '../../../assets/menuImages/mainMenuImages/dessert.jpg';
import wine from '../../../assets/menuImages/mainMenuImages/wine.jpg';
import coctail from '../../../assets/menuImages/mainMenuImages/coctail.jpg';
import burger from '../../../assets/menuImages/mainMenuImages/burger.jpg';

const ManageMenu = () => {
    return (
        <section className="admin-page-manage-menu-wrapper">
            <h1>Manage Menu</h1>
            <section className="manage-menu-categories-section">
            <h1>Menu Categories</h1>
            <article className="menu-categories">

           
                <ul>
                    <li>
                        <Link to="/admin-panel/manage/menu/appetizers" >
                            <img src={appetizers} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Appetizers</p>
                    </li>

                    <li>
                        <Link to="/admin-panel/manage/menu/meat">
                            <img src={meatDishes} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Meat Dishes</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/seafood">
                            <img src={seaFood} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Seafood</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/soups">
                            <img src={soup} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Soups</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/salads">
                            <img src={salads} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Salads</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/pasta">
                            <img src={pasta} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Pasta</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/burgers">
                            <img src={burger} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Burgers</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/desserts">
                            <img src={dessert} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Desserts</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/wines">
                            <img src={wine} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Wines</p>
                    </li>
                    <li>
                        <Link to="/admin-panel/manage/menu/coctails">
                            <img src={coctail} alt="image" />
                        </Link>
                        <p className="main-menu-categories-name">Coctails</p>
                    </li>
                </ul>
                </article>
            </section>
        </section>
    )
}

export default ManageMenu;