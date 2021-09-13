import './MenuSection.css';
import { Link } from 'react-router-dom';

const MenuSection = () => {
    return (
    <section className="menu">
        <article>
            <h1 className="typographgy-heading">Our Menus</h1>
            <p>Take a look at our special menu</p>
                <Link className="check-menu-btn" to="/menu">Check our menu</Link>
        </article>
    </section>
    )

}


export default MenuSection;