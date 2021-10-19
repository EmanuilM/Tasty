import './AddProductToTable.css';
const AddProductToTable = () => {
    const randomData = {
        category: [
            "Pizza",
            "Drinks",
            "Burger"
        ],
        products: [
            "Mediterranean Shrimp Pizza",
            "Sicilian Pizza",
            "Detroit Pizza",
        ]
    }

    return (
        <section className="admin-page-manage-table-add-product">
            <select className="manage-table-select-product-category" name="productCategory">
                {randomData.category.map(x => {
                    return <option>{x}</option>
                })}
            </select>
            <select className="manage-table-select-product" name="productName">
                {randomData.products.map(x => {
                    return <option value={x}>{x}</option>
                })}
            </select>
            <input type="number" className="manage-table-product-quantity" name="productQuantity" />
            {/* <i className="fas fa-times remove-item"></i> */}
        </section>


    )
}

export default AddProductToTable;