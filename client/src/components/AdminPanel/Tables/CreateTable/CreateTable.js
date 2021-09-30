import './CreateTable.css';

const CreateTable = (props) => {
    function goBack () {
        return props.history.goBack();
    }
    return (
        <section className="admin-page-create-table-wrapper">
            <h1>Create table</h1>
            <article className="admin-page-create-table-inputs-wrapper">
                <form>
                    <h3>Table name</h3>
                    <input type="text" placeholder="Enter table name" />
                    <h3>Table Capacity</h3>
                    <input type="number" placeholder="Enter table capacity" />
                    <h3>Table Status</h3>
                    <select>
                        <option>Active</option>
                        <option>Busy</option>
                        <option>Reserved</option>
                    </select>
                </form>
                <div className="admin-page-create-table-buttons-wrapper">
                    <button className="admin-page-create-table-save-changes-button">Save changes</button>
                    <button className="admin-page-create-table-back-button" onClick={goBack}>Back</button>
                </div>
            </article>
        </section>
    )
}

export default CreateTable;