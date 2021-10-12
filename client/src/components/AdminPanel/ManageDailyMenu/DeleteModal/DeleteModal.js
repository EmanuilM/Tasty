import './DeleteModal.css';
import * as dailyMenuService from '../../../../services/dailyMenuService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
const DeleteModal = ({ handleClose, show , id }) => {
    const showHideClassName = show ? "delete-modal-wrapper display-block" : "delete-modal-wrapper display-none";
    const dispatch = useDispatch();
   
    const deleteItem = () => { 
        dispatch(loader());
        dailyMenuService.deleteProduct(id)
        .then(res => {
            dispatch(loader());
            handleClose();
            console.log(res)
        })
        .catch(error => {
            dispatch(loader());
            console.log(error)
        })
    }
    
    return (
        <section className={showHideClassName}>
            <section className="delete-modal">
                <h1>Are you sure you want to delete this item?</h1>
                <div className="delete-modal-button-wrapper">
                    <button onClick={deleteItem}>Yes</button>
                    <button onClick={handleClose}>No</button>
                </div>
            </section>
        </section>
    );
};

export default DeleteModal;