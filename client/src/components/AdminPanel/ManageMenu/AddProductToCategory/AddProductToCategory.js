import './AddProductToCategory.css';
import * as menuService from '../../../../services/menuService';
import { loader } from '../../../../store/loader';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../../../store/alert-slice';
import { useState } from 'react';
import FileUploader from './DragAndDropFileUploader/FileUploader';


const AddProductToCategory = ({ history }) => {

    const dispatch = useDispatch();
    const [filesList, setFilesList] = useState([]);

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



    const addProductHandler = async (e) => {
        e.preventDefault();

        const productFileds = {
            productName: e.target.productName.value,
            productPrice: Number(e.target.productPrice.value),
            productDescription: e.target.productDescription.value,
            category: e.target.category.value,
        }

        const formData = new FormData();
        Array.from(filesList).map(x => {
            formData.append('image', x);
        })
        formData.append('inputs', JSON.stringify(productFileds));



        dispatch(loader());
        menuService.createProduct(formData)
            .then(res => {
                dispatch(loader());
                history.push('/admin-panel/manage/menu');
            })
            .catch((error) => {
                dispatch(loader());
                dispatch(showAlert(error))
            })


    }

    const onFileDrop = (e) => {
        console.log(e.target.files)
        Array.from(e.target.files).map(x => {
            if (x) {
                setFilesList((state) => [...state, x]);
            }
        })

    }

    const fileRemove = (file) => {
        const updatedList = [...filesList];
        updatedList.splice(filesList.indexOf(file), 1);
        setFilesList(updatedList);
    }


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


    return (
        <section className="admin-page-menu-add-product">
            <div className="admin-page-menu-create-product-inputs">
                <h1>Create product</h1>
                <form onSubmit={addProductHandler}>
                    <div className="menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" onChange={onInputChangeHandler} />
                        <div className="form-error-message">
                            {errors.productName ? <small>Product name is required!</small> : ""}
                        </div>
                    </div>

                    <div className="menu-product-category">
                        <p>Add product to</p>
                        <select name="category">
                            <option>Appetizers</option>
                            <option>Meat</option>
                            <option>Seafood</option>
                            <option>Soups</option>
                            <option>Salads</option>
                            <option>Pasta</option>
                            <option>Burgers</option>
                            <option>Desserts</option>
                            <option>Wines</option>
                            <option>Coctails</option>
                        </select>
                    </div>
                    <div className="menu-product-price">
                        <p>Product Price</p>
                        <input type="number" step="any" min="0" name="productPrice" onChange={onInputChangeHandler} />
                        <div className="form-error-message">
                            {errors.productPrice ? <small>Price cannot be negative number!</small> : ""}
                        </div>
                    </div>
                    <div className="menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription" onChange={onInputChangeHandler}></textarea>
                        <div className="form-error-message">
                            {errors.productDescription ? <small>Product description is required!</small> : ""}
                        </div>
                    </div>
                    <FileUploader onFileDrop={onFileDrop} fileRemove={fileRemove} filesList={filesList} />
                    <div className="menu-add-product-button-wrapper">
                        <button disabled={!isFormValid}>Add product to menu</button>
                    </div>
                </form>


            </div>

        </section>
    )
}

export default AddProductToCategory;