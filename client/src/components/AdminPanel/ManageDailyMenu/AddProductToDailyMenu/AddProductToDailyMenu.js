import './AddProductToDailyMenu.css';
import * as dailyMenuService from '../../../../services/dailyMenuService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import { useState } from 'react';
import { useHistory } from 'react-router';

const AddProductToDailyMenu = ({ setDailyMenuProducts }) => {

    const dispatch = useDispatch();

    let history = useHistory();

    const [fields, setFields] = useState({
        productName: '',
        productPrice: '',
        productDescription: '',
    })


    const [errors, setErrors] = useState({
        productName: false,
        productPrice: false,
        productDescription: false,
    })

    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name === 'productPrice') {
            setErrors(state => ({ ...state, [name]: value < 0 ? true : false }));
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }));
        }
        setFields(state => ({ ...state, [name]: value }));
    }

    const isFormValid = Object.values(fields).every(x => x !== '') && Object.values(errors).every(x => x !== true);

    const addProductHandler = async (e) => {
        e.preventDefault()
        const productFileds = {
            productName: e.target.productName.value,
            productPrice: Number(e.target.productPrice.value),
            productDescription: e.target.productDescription.value,
            category: e.target.category.value,
        }
        dispatch(loader());
        dailyMenuService.createProduct(productFileds)
            .then(res => {
                console.log(res)
                dailyMenuService.getProducts()
                    .then(res => {
                        setDailyMenuProducts(res);

                    })
                    .catch(error => {
                        console.log(error);
                    })
                dispatch(loader());
                history.push('/admin-panel/manage/daily-menu');
            })
            .catch((error) => {
                dispatch(loader());
                dispatch(showAlert(error))
                console.log(error);
            })

        dailyMenuService.getProducts()
            .then(res => {
                setDailyMenuProducts(res);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <section className="admin-page-daily-menu-add-product">
            <div className="admin-page-daily-menu-create-product-inputs">
                <h1>Create product</h1>
                <form onSubmit={addProductHandler}>
                    <div className="daily-menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" onChange={onInputChangeHandler} />
                        <div className="form-error-message">
                            {errors.productName ? <small>Product name is required!</small> : ""}
                        </div>
                    </div>

                    <div className="daily-menu-product-category">
                        <p>Add product to</p>
                        <select name="category">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                        </select>
                    </div>
                    <div className="daily-menu-product-price">
                        <p>Product Price</p>
                        <input type="number" step="any" min="1" name="productPrice" onChange={onInputChangeHandler} />
                        <div className="form-error-message">
                            {errors.productPrice ? <small>Price cannot be negative number!</small> : ""}
                        </div>
                    </div>
                    <div className="daily-menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription" onChange={onInputChangeHandler}></textarea>
                        <div className="form-error-message">
                            {errors.productDescription ? <small>Product description is required!</small> : ""}
                        </div>
                    </div>
                    <div className="daily-menu-add-product-button-wrapper">
                        <button disabled={!isFormValid}>Add product to menu</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default AddProductToDailyMenu;