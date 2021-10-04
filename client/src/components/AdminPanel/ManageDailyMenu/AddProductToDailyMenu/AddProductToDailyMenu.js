import './AddProductToDailyMenu.css';

const AddProductToDailyMenu = () => {
    return (
        <section className="admin-page-daily-menu-add-product">
            <div className="admin-page-daily-menu-create-product-inputs">
                <div className="daily-menu-product-name">
                    <p>Product Name</p>
                    <input type="text" />
                </div>

                <div className="daily-menu-product-category">
                    <p>Add product to</p>
                    <select>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                </div>
                <div className="daily-menu-product-price">
                    <p>Product Price</p>
                    <input type="number" />
                </div>
                <div className="daily-menu-product-description">
                    <p>Description</p>
                    <textarea cols="70" rows="10" style={{resize : "none" , width : "300px"}}></textarea>
                </div>
            </div>
            <div className="daily-menu-add-product-button-wrapper">
            <button>Add product to menu</button>
            </div>
        </section>
    )
}

export default  AddProductToDailyMenu;