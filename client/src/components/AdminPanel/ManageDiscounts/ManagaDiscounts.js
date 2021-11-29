import './ManageDiscounts.css';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import * as discountService from '../../../services/discountService';
import { useEffect, useState } from 'react';
import DiscountListItem from './DiscountListItem/DiscountListItem';
import { Link } from 'react-router-dom';
import { showAlert } from '../../../store/alert-slice';

const ManageDiscounts = ({ location }) => {

    const dispatch = useDispatch();

    const [discounts, setDiscounts] = useState([]);
    const [pages, setPages] = useState([]);
    const [isUpdateShown, setIsUpdateShown] = useState(false);
    const [updateDiscountData, setUpdateDiscountData] = useState({});
    const [errorsCreateDiscounts, setErrorsCreateDiscount] = useState({
        discountCode: false,
        discount: false,
    });

    const [errorsUpdateDiscounts, setErrorsUpdateDiscount] = useState({
        discountCodeUpdate: false,
        discountUpdate: false,
    });

    const [createFields, setCreateFileds] = useState({
        discountCode: '',
        discount: '',
    });

    const [updateFields, setUpdateFileds] = useState({
        discountCodeUpdate: '',
        discountUpdate: '',
    });



    const page = location.search.split('=')[1];
    useEffect(() => {
        dispatch(loader());
        discountService.getAllDiscounts(page || 1)
            .then(([allDiscounts, filteredDiscounts]) => {
                dispatch(loader());
                setDiscounts(filteredDiscounts);
                setPages(Array.from({ length: Math.ceil(allDiscounts.length / 10) }, (v, i) => i + 1))
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }, [location.search])



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
                setDiscounts((state) => [...state, res]);
                setCreateFileds((state) => ({ ...state, discountCode: '', discount: '' }))
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert(error));
                console.log(error);
            })

    }

    function deletePromoCode(id) {
        dispatch(loader());
        discountService.deletePromoCode(id)
            .then(res => {
                dispatch(loader());
                setDiscounts(res);
                setIsUpdateShown(false);

            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert(error));
                
            })
    }


    async function onInputCreateChangeHandler(e) {
        const { name, value } = e.target;
        if (name === 'discountCode') {
            setErrorsCreateDiscount((state) => ({ ...state, [name]: value === '' ? true : false }));
        }
        if (name === 'discount') {
            setErrorsCreateDiscount((state) => ({ ...state, [name]: value === '' ? true : false }));
        }

        setCreateFileds((state) => ({ ...state, [name]: value }));
    }

    async function onInputUpdateChangeHandler(e) {
        const { name, value } = e.target;

        if (name === 'discountCodeUpdate') {
            setErrorsUpdateDiscount((state) => ({ ...state, [name]: value === '' ? true : false }));
        }
        if (name === 'discountUpdate') {
            setErrorsUpdateDiscount((state) => ({ ...state, [name]: value === '' ? true : false }));
        }

        setUpdateFileds((state) => ({ ...state, [name]: value }));
    }


    const isCreateDiscountValid = Object.values(createFields).every(x => x !== '') && Object.values(errorsCreateDiscounts).every(x => x === false);
    const isUpdateDiscountValid = Object.values(updateFields).every(x => x !== '') && Object.values(errorsUpdateDiscounts).every(x => x === false);

    function showUpdatePromoCodeMenu(id) {
        setIsUpdateShown(true);
        dispatch(loader())
        discountService.getPromoCodeByID(id)
            .then(res => {
                dispatch(loader());
                setUpdateDiscountData(res);

                setUpdateFileds((state) => ({ ...state, discountCodeUpdate: res.promoCode, discountUpdate: res.percent }));
                setErrorsUpdateDiscount((state) => ({ ...state, discountCodeUpdate: res.promoCode === '' ? true : false, discountUpdate: res.percent === '' ? true : false }));

            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }



    async function updatePromoCode(e) {
        e.preventDefault();
        const formData = {
            promoCode: e.target.discountCodeUpdate.value,
            percent: e.target.discountUpdate.value,
        }
        dispatch(loader())
        discountService.updatePromoCode(updateDiscountData._id, formData)
            .then(res => {
                dispatch(loader());
                setDiscounts(res);
                setIsUpdateShown(false);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
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
                            <input type="text" placeholder="DISCOUNT" name="discountCode" value={createFields.discountCode} onChange={onInputCreateChangeHandler} />
                            <div className="form-error-message">
                                {errorsCreateDiscounts.discountCode ? <small>Required!</small> : ""}
                            </div>
                        </label>
                        <label>
                            Discount (%)
                            <input type="number" min="1" max="100" name="discount" value={createFields.discount} onChange={onInputCreateChangeHandler} />
                            <div className="form-error-message">
                                {errorsCreateDiscounts.discount ? <small>Required!</small> : ""}
                            </div>
                        </label>
                        <div className="create-and-update-promo-code-button-wrapper">
                            <button className="create-promo-code-button" disabled={!isCreateDiscountValid}>Create promo code</button>
                        </div>
                    </form>
                </article>

                {isUpdateShown ? <article className="edit-promo-code-wrapper">
                    <h3>Edit Promo Code : {updateDiscountData.promoCode}</h3>
                    <form onSubmit={updatePromoCode}>
                        <label>
                            Code
                            <input type="text" name="discountCodeUpdate" onChange={onInputUpdateChangeHandler} value={updateFields.discountCodeUpdate} />
                            <div className="form-error-message">
                                {errorsUpdateDiscounts.discountCodeUpdate ? <small>Required!</small> : ""}
                            </div>
                        </label>
                        <label>
                            Discount (%)
                            <input type="number" min="1" max="100" name="discountUpdate" onChange={onInputUpdateChangeHandler} value={updateFields.discountUpdate} />
                            <div className="form-error-message">
                                {errorsUpdateDiscounts.discountUpdate ? <small>Required!</small> : ""}
                            </div>
                        </label>
                        <div className="create-and-update-promo-code-button-wrapper">
                            <button className="edit-promo-code-button" disabled={!isUpdateDiscountValid}>Save Changes</button>
                        </div>
                    </form>

                </article> : ""}

            </section>

            <section className="promo-codes-list-wrapper">
                <ul>
                    <li>Promo code</li>
                    <li>Discount</li>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>

                <ul>
                    {discounts.length >= 1 ? discounts.map(x => {
                        return <DiscountListItem key={x._id} promoCode={x.promoCode} percent={x.percent} id={x._id} deletePromoCode={deletePromoCode} showUpdate={showUpdatePromoCodeMenu} />
                    }) : <h1>There's no discounts yet!</h1>}


                </ul>
            </section>
            <ul className="admin-panel-discounts-pagginator">
                {discounts.length ? <li>
                    <Link to={`/admin-panel/discounts?page=${Number(location.search.split('=')[1]) - 1 ? Number(location.search.split('=')[1]) - 1 : 1}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </li> : ""}

                {pages.map(x => {
                    return <li key={x}>
                        <Link to={`/admin-panel/discounts?page=${x}`}>{x}</Link>
                    </li>
                })}

                {discounts.length >= 10 ? <li>
                    <Link to={`/admin-panel/discounts?page=${Number(location.search.split('=')[1]) + 1 ? Number(location.search.split('=')[1]) + 1 : 2}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </li> : ""}
            </ul>
        </section>
    )
}

export default ManageDiscounts