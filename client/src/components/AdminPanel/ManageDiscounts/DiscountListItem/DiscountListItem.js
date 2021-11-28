import './DiscountListItem.css';
import { useState } from 'react';
import DeleteModal from '../../../shared/DeleteModal/DeleteModal';

const DiscountListItem = ({ promoCode , percent ,   id , deletePromoCode , showUpdate}) => {
    
    
    const [isDeleteModalActive, setDeleteModal] = useState(false);


    function showDeleteModal() {
        setDeleteModal(true);
    }

    function hideDeleteModal() {
        setDeleteModal(false);
    }
    return (
        <li>
            <p>{promoCode}</p>
            <p>{percent}%</p>
            <p>
                <i className="fas fa-highlighter edit-discount" onClick={() => showUpdate(id)}></i>
            </p>
            <p>
                <i className="fas fa-trash delete-discount" onClick={showDeleteModal}></i>
            </p>
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} deleteItem={deletePromoCode} id={id} text="discount"   />
        </li>
    )
}

export default DiscountListItem;