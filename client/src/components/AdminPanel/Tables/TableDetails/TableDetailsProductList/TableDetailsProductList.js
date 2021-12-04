import './TableDetailsProductList.css';
import DeleteModal from '../../../../shared/DeleteModal/DeleteModal';
import { useState } from 'react';
import * as tableService from '../../../../../services/tablesService';

const TableDetailsProductList = ({ productImage, productName, productQuantity, productPrice, tableID, setTableProducts }) => {
    const [isDeleteModalActive, setDeleteModalActive] = useState(false);
    function showDeleteModal() {
        setDeleteModalActive(true);
    }
    function hideDeleteModal() {
        setDeleteModalActive(false);
    }

    function deleteProduct(tableID) {
        tableService.deleteProduct(tableID, productName)
            .then(res => {
                setTableProducts(res.products);
                hideDeleteModal();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <li>
            <img src={productImage} alt="image" />
            <p>{productName}</p>
            <p>x{productQuantity}</p>

            <p>{productPrice}$</p>
            <i className="fas fa-times remove-item" onClick={showDeleteModal}></i>
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} id={tableID} deleteItem={deleteProduct} text="product" />
        </li>
    )
}

export default TableDetailsProductList;