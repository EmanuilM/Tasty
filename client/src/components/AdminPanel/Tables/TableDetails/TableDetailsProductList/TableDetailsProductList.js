import './TableDetailsProductList.css';
import DeleteModal from '../../../../shared/DeleteModal/DeleteModal';
import { useState } from 'react';
import * as tableService from '../../../../../services/tablesService';

const TableDetailsProductList = ({productImage , productName , productQuantity , productPrice , id}) => {
    const [isDeleteModalActive , setDeleteModalActive] = useState(false);
    function showDeleteModal() { 
        setDeleteModalActive(true);
    }
    function hideDeleteModal() { 
        setDeleteModalActive(false);
    }

    function deleteProduct(id) { 
        tableService.deleteProduct(id , productName)
        .then(res => { 
            console.log(res);
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
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} id={id} deleteItem={deleteProduct} text="product" / >
        </li>
    )
}

export default TableDetailsProductList;