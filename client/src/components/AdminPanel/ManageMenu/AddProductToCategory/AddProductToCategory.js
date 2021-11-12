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




    return (
        <section className="admin-page-menu-add-product">
            <div className="admin-page-menu-create-product-inputs">
                <h1>Create product</h1>
                <form onSubmit={addProductHandler}>
                    <div className="menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" />
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
                        <input type="number" step="any" min="0" name="productPrice" />
                    </div>
                    <div className="menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription"></textarea>
                    </div>
                    <FileUploader onFileDrop={onFileDrop} fileRemove={fileRemove} filesList={filesList} />
                    <div className="menu-add-product-button-wrapper">
                        <button>Add product to menu</button>
                    </div>
                    {/* <input type="file" multiple onChange={handleChange} /> */}
                </form>


            </div>

        </section>
    )
}

export default AddProductToCategory;