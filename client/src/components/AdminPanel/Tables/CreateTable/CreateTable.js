import './CreateTable.css';
import * as tablesService from '../../../../services/tablesService'
import { useDispatch } from 'react-redux'
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';

const CreateTable = ({ history }) => {

    const dispatch = useDispatch();

    const createTable = (e) => {
        e.preventDefault();
        const formFileds = { 
            tableName : e.target.tableName.value,
            tableCapacity : e.target.tableCapacity.value,
            tableStatus : e.target.tableStatus.value,
        }

        dispatch(loader());
        tablesService.createTable(formFileds)
        .then(res => { 
            dispatch(loader());
            history.push('/admin-panel/tables');
            console.log(res);
        })
        .catch(error => { 
            dispatch(loader());
            dispatch(showAlert(error));
            console.log(error);
        })

    }

    function goBack() {
        return history.goBack();
    }
    return (
        <section className="admin-page-create-table-wrapper">
            <h1>Create table</h1>
            <article className="admin-page-create-table-inputs-wrapper">
                <form onSubmit={createTable}>
                    <h3>Table name</h3>
                    <input type="text" name="tableName" placeholder="Enter table name" />
                    <h3>Table Capacity</h3>
                    <input type="number" name="tableCapacity" placeholder="Enter table capacity" />
                    <h3>Table Status</h3>
                    <select name="tableStatus">
                        <option>Active</option>
                        <option>Busy</option>
                        <option>Reserved</option>
                    </select>
                    <div className="admin-page-create-table-buttons-wrapper">
                        <button className="admin-page-create-table-save-changes-button">Save changes</button>
                        <button type="button" className="admin-page-create-table-back-button" onClick={goBack}>Back</button>
                    </div>
                </form>

            </article>
        </section>
    )
}

export default CreateTable;