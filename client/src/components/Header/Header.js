import './Header.css';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../store';

const Header = (props) => {
    const [isActive, setActive] = useState(false);

    const activateSmallScreenView = () => {
        setActive(!isActive);
    }
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return (
            <header className={isActive ? "showMenu" : null}>
                <nav>
                    <i onClick={activateSmallScreenView} className="fas fa-bars"></i>
                    <ul className={isActive ? "showMenuItems" : null} >
                        <li>
                            <Link onClick={activateSmallScreenView} to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/daily-menu">Daily Menu</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/reservation/make">Reservation</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/order">Order</Link>
                        </li>
                        {
                            props.isAdmin ?
                                <li>
                                    <Link onClick={activateSmallScreenView} to="/admin-panel">Admin Panel</Link>
                                </li>
                                : ""
                        }

                        <Route path="/order">
                            <li className="order-cart">

                                <Link to="/order-check-out" >
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </li>
                        </Route>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return (
            <header className={isActive ? "showMenu" : null}>
                <nav>
                    <i onClick={activateSmallScreenView} className="fas fa-bars"></i>
                    <ul className={isActive ? "showMenuItems" : null} >
                        <li>
                            <Link onClick={activateSmallScreenView} to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/daily-menu">Daily Menu</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/sign-up">Sign up</Link>
                        </li>
                        <li>
                            <Link onClick={activateSmallScreenView} to="/sign-in">Sign in</Link>
                        </li>
                       
                    </ul>
                </nav>
            </header>
        )
    }


}

export default Header;