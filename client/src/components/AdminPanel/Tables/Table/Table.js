import { useState } from "react";
import { Link } from "react-router-dom"
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import * as tablesService from '../../../../services/tablesService';
import { useDispatch } from "react-redux";
import { loader } from "../../../../store/loader";



export const Table = ({ data , deleteTable}) => {

    const dispatch = useDispatch();


    const [modal, setModal] = useState(false);

    function showModal() {
        setModal(true);
    }

    function hideModal() {
        setModal(false);
    }

   

    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.capacity}</td>
            <td>
                <div className={data.status}>
                    {data.status}
                </div>
            </td>
            <td className="admin-page-manage-tables-actions-wrapper">
                <div className="admin-page-tables-actions">
                    <Link to={`tables/details/${data._id}`}>
                        <i className="fas fa-info"></i>
                    </Link>
                    <Link to={`tables/manage/${data._id}`}>
                        <i className="fas fa-edit"></i>
                    </Link>
                    <i className="fas fa-trash" onClick={showModal}></i>
                    <DeleteModal show={modal} handleClose={hideModal} id={data._id} deleteItem={deleteTable} text="table" />

                </div>
            </td>
        </tr>
    )
}



