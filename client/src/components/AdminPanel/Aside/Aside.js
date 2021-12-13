import './Aside.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAppSelector } from '../../../store/index';

const Aside = () => {
    const [activeSideBar, setSideBarActive] = useState(true);
    const authState = useAppSelector(state => state.auth);

    function setAsideBarState() {
        setSideBarActive(!activeSideBar);
    }
    return (
        <section className="aside-navigation">

            <aside className={activeSideBar ? "showAside" : "hideAside"}>
                <nav>
                    <ul>

                        <li>
                            <Link to="/admin-panel">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/tables">
                                <i className="far fa-edit admin-panel-icon"></i>
                                Tables
                            </Link>
                        </li>
                        {authState.userAuthState.isAdmin ?
                            <>
                                <li>
                                    <Link to="/admin-panel/manage/daily-menu">
                                        <i className="fas fa-pizza-slice admin-panel-icon"></i>
                                        Manage Daily Menu
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin-panel/manage/menu">
                                        <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                        Manage Menu
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin-panel/discounts">
                                        <i className="fas fa-coins admin-panel-icon"></i>
                                        Manage Discounts
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin-panel/make-account">
                                        <i className="far fa-user admin-panel-icon"></i>
                                        Make account
                                    </Link>
                                </li>

                            </>

                            : ""}



                        <li>
                            <Link to="/admin-panel/manage/orders/all-orders">
                                <i className="fas fa-shopping-cart admin-panel-icon"></i>
                                Manage Orders
                            </Link>
                        </li>


                        <li>
                            <Link to="/admin-panel/reservations">
                                <i className="fas fa-book-open admin-panel-icon"></i>
                                Manage Reservations
                            </Link>
                        </li>


                    </ul>
                </nav>
            </aside>
        </section>
    )

}

export default Aside;