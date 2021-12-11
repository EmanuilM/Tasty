import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store';
import { handleLogOut } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import * as authService from '../../services/authService';


const Header = ({ dailyMenuProducts }) => {
    const dispatch = useDispatch();
    const [isActive, setActive] = useState(false);
    const orderState = useAppSelector(state => state.order);

    const activateSmallScreenView = () => {
        setActive(!isActive);
    }
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    const isAdmin = useAppSelector(state => state.auth.userAuthState.isAdmin);

 
    const logoutHandler = () => {
        authService.logout()
            .then(data => {
                dispatch(handleLogOut())
            })
            .catch((error) => {
                console.log(error);
            })
    }
   

    if (isAuthenticated) {
        return (
            <header className={isActive ? "showMenu" : null}>
                <nav>
                    <i onClick={activateSmallScreenView} className="fas fa-bars"></i>
                    <ul className={isActive ? "showMenuItems" : null} >
                        <li>
                            <Link onClick={activateSmallScreenView} to="/">Home</Link>
                        </li>
                        {dailyMenuProducts.some(x => x.length > 0 ) ? <li>
                            <Link onClick={activateSmallScreenView} to="/daily-menu">Daily Menu</Link>
                        </li> : ""}
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
                            isAdmin ?
                                <li>
                                    <Link onClick={activateSmallScreenView} to="/admin-panel">Admin Panel</Link>
                                </li>
                                : ""
                        }

                        {orderState?.length >= 1 ? <li className="order-cart">
                            <Link to="/order-check-out" ><i className="fas fa-shopping-cart"></i> </Link>
                        </li> : ""}

                        <li>
                            <Link to="/my-profile">
                                <span>My Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="#" onClick={() => logoutHandler()}>
                                <span>Logout</span>
                            </Link>
                        </li>
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