import './DeleteModal.css';
const DeleteModal = ({ handleClose, show , id , deleteItem , text  }) => {
    const showHideClassName = show ? "delete-modal-wrapper display-block" : "delete-modal-wrapper display-none";

    return (
        <section className={showHideClassName}>
            <section className="delete-modal">
                <h1>Are you sure you want to delete this {text}?</h1>
                <div className="delete-modal-button-wrapper">
                    <button onClick={() => deleteItem(id)}>Yes</button>
                    <button onClick={handleClose}>No</button>
                </div>
            </section>
        </section>
    );
};

export default DeleteModal;