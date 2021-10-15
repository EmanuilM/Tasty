import './DailyMenuProduct.css';
import { Fragment, useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import { Link } from 'react-router-dom';

const DailyMenuProduct = ({ data, id , deleteItem }) => {
    const [isDeleteModalActive, setDeleteModal] = useState(false);

    function showDeleteModal() {
        setDeleteModal(true);
    }
    function hideDeleteModal() {
        setDeleteModal(false);
    }

    return (
        <Fragment>
            <li>
                <div className="admin-page-manage-menu-current-products">
                    <p>{data.productName}</p>
                    <p>{data.productPrice}$</p>
                    <Link to={`/admin-panel/daily-menu/product/edit/${id}`}>
                        <i className="fas fa-highlighter"></i>
                    </Link>
                    <i className="fas fa-trash" onClick={showDeleteModal}></i>
                </div>
            </li>
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} id={id} deleteItem={deleteItem} />
        </Fragment>
    )
}

export default DailyMenuProduct;