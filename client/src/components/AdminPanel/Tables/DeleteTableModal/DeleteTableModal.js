import './DeleteTableModal.css';
export const DeleteTableModal = ({ show , closeModal , id , deleteTable }) => {
    
    const showHideClassName = show ? "delete-table-modal-wrapper display-block" : "delete-table-modal-wrapper display-none";


    return (
        <section className={showHideClassName}>
            <section className="delete-table-modal">
                <h1>Are you sure you want to delete this table?</h1>
                <div className="delete-table-modal-button-wrapper">
                    <button onClick={() => deleteTable(id)} >Yes</button>
                    <button onClick={closeModal}>No</button>
                </div>
            </section>
        </section>
    );
};

