import './Header.css';
import { Link , Route} from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isActive, setActive] = useState(false);

    const activateSmallScreenView = () => {
        setActive(!isActive);
    }

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
                    <li>
                        <Link onClick={activateSmallScreenView} to="/sign-up">Sign up</Link>
                    </li>
                    <li>
                        <Link onClick={activateSmallScreenView} to="/sign-in">Sign in</Link>
                    </li>
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
}

export default Header;