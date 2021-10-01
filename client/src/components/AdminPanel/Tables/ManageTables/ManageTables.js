import './ManageTables.css';
import AddProductToTable from './AddProductToTable/AddProductToTable';
import { useState } from 'react/cjs/react.development';
import { Fragment } from 'react';
const ManageTables = (props) => {

    const [reserved, setReserved] = useState(false);
    const [product, setProductToTable] = useState([<AddProductToTable />]);
    function testFunction(e) {
        if (e.target.value === "Reserved") {
            setReserved(true);
        } else {
            setReserved(false);
        }
    }
    function addProduct() {
        setProductToTable(oldState => [...oldState, <AddProductToTable />]);
    }
    function goBack() {
        return props.history.goBack();
    }
    return (
        <section className="admin-page-manage-table-wrapper">
            <h1>Managing table {props.match.params.tableID}</h1>
            <div className="admin-page-add-product-button-wrapper">
                <p>Add product to table</p>
                <button className="manage-table-add-product-button" onClick={addProduct}>Add product</button>
            </div>
            <div className="admin-page-manage-table-titles">
                <h3>Category</h3>
                <h3>Product</h3>
                <h3>Quantity</h3>
            </div>
            {product.map((x,i) => {
               
                return <Fragment key={i}>{x}</Fragment>
                
            })}
            <article className="change-table-status">
                <p>Change table status</p>
                <select name="test" onChange={testFunction}>
                    <option>Active</option>
                    <option>Busy</option>
                    <option>Reserved</option>
                </select>
                {
                    reserved ?
                        <>
                            <input type="date" />
                            <input type="time" />
                        </>
                        : ""
                }

            </article>
            <div className="admin-page-manage-tables-buttons-wrapper">
                <button className="admin-page-manage-tables-save-changes-button">Save changes</button>
                <button className="admin-page-manage-tables-back-button" onClick={goBack}>Back</button>
            </div>


        </section>
    )
}

export default ManageTables;