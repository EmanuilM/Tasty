import './AddProductToMenu.css';

const AddProductToMenu = () => {
    return (
        <section className="admin-page-create-product-wrapper">
            <div className="admin-page-create-product-inputs">
            <p>Product Name</p>
            <input type="text" />
            <p>Add product to</p>
            <select>
                <option>Daily menu</option>
                <option>Main menu</option>
                <option>Order menu</option>
            </select>
            <p>Product Category</p>
            <select>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
            </select>
            <p>Product Price</p>
            <input type="number" />
            </div>

        </section>
    )
}

export default AddProductToMenu;