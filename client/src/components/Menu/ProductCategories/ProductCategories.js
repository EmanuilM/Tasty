import './ProductCategories.css';
import MainMenuProduct from './MainMenuProduct/MainMenuProduct';
import image from '../../../assets/menuImages/product-1.png';

const ProductCategories = ({match}) => {
    console.log(match.params)
    return (
        <main>
            <section className="main-product-categories-page-wrapper">
                <article className="main-menu-banner-wrapper">
                    <h1>Appetizers</h1>
                </article>

                <article className="main-menu-products">
                    <ul>
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                      <MainMenuProduct productName="Mediterranean Shrimp Pizza" image={image} price="8.40" ingredients="Pepperoni, mushrooms, sausage, pizza sauce, and mozzarella cheese." weight="450g" />
                    </ul>
                </article>
                <article className="main-menu-paggination">
                    <ul>
                        <li>
                            <i class="fas fa-arrow-left"></i>
                        </li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>
                        <i class="fas fa-arrow-right"></i>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default ProductCategories;