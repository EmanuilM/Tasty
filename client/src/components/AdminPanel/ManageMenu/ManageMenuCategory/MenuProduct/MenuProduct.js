import './MenuProduct.css';
import { Link } from 'react-router-dom';
import DeleteModal from '../../../../shared/DeleteModal/DeleteModal';
import { Fragment , useState } from 'react';


 export const MenuProduct = ({data , id , deleteItem}) => {
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
                <p>{data.productName}</p>
                <Link to={`/admin-panel/manage/menu/product/edit/${data._id}`}>
                    <i className="fas fa-highlighter editIcon"></i>
                </Link>
                <i className="fas fa-trash deleteIcon" onClick={showDeleteModal}></i>
            </li>
            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal}  id={id} deleteItem={deleteItem} text="product" />
        </Fragment>

    )
}

