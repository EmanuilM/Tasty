import './Menu.css';
import image1 from '../../assets/menuImages/menuAside1.jpg';
import image2 from '../../assets/menuImages/menuAside2.jpg';
import image3 from '../../assets/menuImages/menuAside3.jpg';
import MenuListItem from './MenuListItems/MenuListItem';

const Menu = () => {
    return (
        <main>
            <section className="menu-page-wrapper">
                <article className="menu-banner-wrapper">
                    <h1>Our menu</h1>
                    {/* <img src={image} alt="image" /> */}
                </article>
                <h1 className="menu-heading">BREAKFAST MENU</h1>
                <section className="menu-wrapper">
                    <img src={image1} alt="image" />
                    <article className="menu-list-items">
                        <ul>
                            <MenuListItem itemName="Breakfast Complete" price="6.25" ingredients="croissant, fruit salad and French yoghurt pot" />
                            <MenuListItem itemName="French Toast" price="6.75" ingredients="French toast with fruit saladand maple flavoured syrup" />
                            <MenuListItem itemName="Crêpe Complète" price="7.25" ingredients="warm crêpe with two free range eggs, shaved Gruyère cheese" />
                            <MenuListItem itemName="Vegetarian Breakfast" price="7.50" ingredients="vegetarian sausage, field mushroom, tomato, avocado, baby spinach" />
                        </ul>
                        <ul>
                            <MenuListItem itemName="French Breakfast" price="7.75" ingredients="eggs, boudin noir, French streaky bacon and a field mushroom" />
                            <MenuListItem itemName="Eggs Benedict" price="7.75" ingredients="chicken breast, black pepper, garlic, onion, green chillies" />
                            <MenuListItem itemName="English Breakfast" price="8.00" ingredients="two free range eggs, bacon, tomato, mushrooms and toast" />
                            <MenuListItem itemName="Barrel's Breakfast" price="8.25" ingredients="ham, pork chops grilled to order, three eggs" />
                        </ul>
                    </article>
                </section>
                <h1 className="menu-heading">LUNCH MENU</h1>
                <section className="menu-wrapper-reverse">
                    <article className="menu-list-items">
                        <ul>
                            <MenuListItem itemName="She Crab Soup" price="15.25" ingredients="fresh crab, herb foam, caviar, herb foam, cavia" />
                            <MenuListItem itemName="Black Bean Soup" price="10.75" ingredients="pico de gallo, micro cilantro, tequila crème fraîche" />
                            <MenuListItem itemName="Turkey Melt" price="14.00" ingredients="gruyere chesse, bacon onion jam, herb aioli, texas toast" />
                            <MenuListItem itemName="Lobster Roll" price="16.50" ingredients="roasted red pepper remoulade, arugula, pickled red onions, bread" />
                        </ul>
                        <ul>
                            <MenuListItem itemName="Shrimp and Grits" price="16.75" ingredients="caramelized onions, TSD bacon, white cheddar grit cakes, butter" />
                            <MenuListItem itemName="Spring Salad" price="12.75" ingredients="spring mixed greens, strawberries, spiced pecans, balsamic vinaigrette" />
                            <MenuListItem itemName="Fried Chicken Breast" price="15.00" ingredients="blue cheese mac, french beans, blackpepper-honey hollandaise" />
                            <MenuListItem itemName="Seafood Pastat" price="18.00" ingredients="bay scallops, shrimp, hand cut pasta, bacon, onion" />
                        </ul>
                    </article>
                    <img src={image2} alt="image" />

                </section>


                <h1 className="menu-heading">DINNER MENU</h1>
            <section className="menu-wrapper">
                    <img src={image3} alt="image" />
                    <article className="menu-list-items">
                        <ul>
                            <MenuListItem itemName="Veal Chop" price="16.25" ingredients="ricotta polenta, rainbow swiss chard, cognac cream sauce" />
                            <MenuListItem itemName="Wood Roasted Salmon" price="16.50" ingredients="tri-colored orzo pasta, san marzano tomatoes, olives, basil pesto" />
                            <MenuListItem itemName="Pan Seared Chicken" price="12.25" ingredients="brown rice, red beans, bacon, corn bread" />
                            <MenuListItem itemName="Butter Poached Lobster" price="17.50" ingredients="clams, andouille sausage, marble potatoes, tomato clam broth" />
                        </ul>
                        <ul>
                            <MenuListItem itemName="Caesar Salad" price="10.00" ingredients="parmesan panna cotta, anchovy dressing, crostini" />
                            <MenuListItem itemName="Mixed Greens Salad" price="10.00" ingredients="heirloom tomatoes, cucumbers, goat cheese, blood orange vinaigrette" />
                            <MenuListItem itemName="Pork Belly" price="14.75" ingredients="peach puree, soft poached egg, cheddar cheese grits, spun potatoes" />
                            <MenuListItem itemName="Peach Gazpacho" price="12.25" ingredients="pico de gallo, tequila cream, micro cilantro" />
                        </ul>
                    </article>
                </section>





            </section>

          
        </main>
    )
}

export default Menu;