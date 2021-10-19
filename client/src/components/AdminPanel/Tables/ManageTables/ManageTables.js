import './ManageTables.css';
import AddProductToTable from './AddProductToTable/AddProductToTable';
import { useState } from 'react/cjs/react.development';
import { Fragment } from 'react';
import * as tablesService from '../../../../services/tablesService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';


const ManageTables = ({ history , match }) => {
    
    const dispatch = useDispatch();


    const [reserved, setReserved] = useState(false);
    const [product, setProductToTable] = useState([<AddProductToTable />]);
    function reservedFunction(e) {
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
        return history.goBack();
    }

    const manageTable = (e) => { 
        e.preventDefault();
        
        let products = [];
        if(e.target.productName instanceof HTMLElement) { 
            products.push(e.target.productName.value);
        }else { 
            products = Array.from(e.target.productName).map(x => { 
                return x.value
            });
        }

        const tableStatus = e.target.tableStatus.value;
        
        dispatch(loader());
        tablesService.addProduct(match.params.tableID , products , tableStatus)
        .then(res => {
            dispatch(loader());
            history.push('/admin-panel/tables');
        })
        .catch(error => { 
            dispatch(loader());
            dispatch(showAlert(error));
            console.log(error);
        })
      
        
    }

    return (
        <section className="admin-page-manage-table-wrapper">
            <h1>Managing table {match.params.tableID}</h1>
            <div className="admin-page-add-product-button-wrapper">
                <p>Add product to table</p>
                <button className="manage-table-add-product-button" onClick={addProduct}>Add product</button>
            </div>
            <div className="admin-page-manage-table-titles">
                <h3>Category</h3>
                <h3>Product</h3>
                <h3>Quantity</h3>
            </div>
            <form onSubmit={manageTable}>
                {product.map((x, i) => {

                    return <Fragment key={i}>{x}</Fragment>

                })}

                <article className="change-table-status">
                    <p>Change table status</p>
                    <select name="tableStatus" onChange={reservedFunction}>
                        <option>Active</option>
                        <option>Busy</option>
                        <option>Reserved</option>
                    </select>

                    {
                        reserved ?
                            <Fragment>
                                <input type="date" />
                                <input type="time" />
                            </Fragment>
                            : ""
                    }

                </article>
                <div className="admin-page-manage-tables-buttons-wrapper">
                    <button className="admin-page-manage-tables-save-changes-button">Save changes</button>
                    <button className="admin-page-manage-tables-back-button" onClick={goBack}>Back</button>
                </div>
            </form>




        </section >
    )
}

export default ManageTables;