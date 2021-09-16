import './MainMenuProduct.css';


const MainMenuProduct = (props) => {
    return (
        <li>
            <p className="main-menu-product-price">{props.price}$</p>
            <img src={props.image} alt="image" />
            <p className="main-menu-product-name">{props.productName}</p>
            <p className="main-menu-product-ingredients">
                <span>Ingredients : </span>
                <span>{props.ingredients}</span>
            </p>
            <p className="main-menu-product-weight">
                <span>Weight : </span>
                <span>{props.weight}</span>
            </p>
        </li>
    )

}

export default MainMenuProduct;