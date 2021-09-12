import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isActive , setActive] = useState(false);

    const activateSmallScreenView = () => { 
        setActive(!isActive);
    }

    return (
        <header className={isActive ? "showMenu" : null}>
            <nav>
                <i onClick={activateSmallScreenView} className="fas fa-bars"></i>
                <ul className={isActive ? "showMenuItems" : null} >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>

                    </li>
                    <li>
                        <a href="#">Locations</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                    <li>
                        <Link to="sign-up">Sign up</Link>
                    </li>
                    <li>
                        <Link to="sign-in">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;