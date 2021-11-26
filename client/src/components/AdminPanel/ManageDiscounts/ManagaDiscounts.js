import './ManageDiscounts.css';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import * as discountService from '../../../services/discountService';
import { useEffect, useState } from 'react';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';

const ManageDiscounts = () => {

    const dispatch = useDispatch();

    const [discounts, setDiscounts] = useState([]);
    const [isDeleteModalActive, setDeleteModal] = useState(false);


    useEffect(() => {
        dispatch(loader());
        discountService.getAllDiscounts()
            .then(res => {
                dispatch(loader());
                console.log(res);
                setDiscounts(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);

            })

    }, [])


    function createPromoCode(e) {
        e.preventDefault();
        const formData = {
            promoCode: e.target.discountCode.value,
            percent: Number(e.target.discount.value)
        }
        dispatch(loader());
        discountService.createDiscount(formData)
            .then(res => {
                dispatch(loader());
                console.log(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);

            })

    }

    function deletePromoCode(id) {
        console.log(id);
    }

    function showDeleteModal() {
        setDeleteModal(true);
    }

    function hideDeleteModal() {
        setDeleteModal(false);
    }

    return (
        <section className="admin-page-manage-discount-wrapper">
            <h1>Manage discounts page</h1>

            <section className="discounts-wrapper">
                <article className="create-discount-wrapper">
                    <h3>Create discount code</h3>
                    <form onSubmit={createPromoCode}>
                        <label>
                            Code
                            <input type="text" placeholder="DISCOUNT" name="discountCode" />
                        </label>
                        <label>
                            Discount (%)
                            <input type="number" min="1" max="100" name="discount" />
                        </label>
                        <button className="create-promo-code-button">Create promo code</button>
                    </form>
                </article>

                <article className="edit-promo-code-wrapper">
                    <h3>Edit Promo Code : asdasdasd</h3>
                    <form>
                        <label>
                            Code
                            <input type="text" />
                        </label>
                        <label>
                            Discount (%)
                            <input type="text" />
                        </label>
                        <button className="edit-promo-code-button">Save Changes</button>
                    </form>

                </article>
            </section>

            <section className="promo-codes-list-wrapper">
                <ul>
                    <li>Promo code</li>
                    <li>Discount</li>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>

                <ul>
                    {discounts.map(x => {
                        return <li key={x._id}>
                            <p>{x.promoCode}</p>
                            <p>{x.percent}%</p>
                            <p>
                                <i className="fas fa-highlighter edit-discount"></i>
                            </p>
                            <p>
                                <i className="fas fa-trash delete-discount" onClick={showDeleteModal}></i>
                            </p>
                            <DeleteModal show={isDeleteModalActive} handleClose={hideDeleteModal} text="discount" deleteItem={deletePromoCode} id={x._id} />
                        </li>
                    })}


                </ul>
            </section>
        </section>
    )
}

export default ManageDiscounts