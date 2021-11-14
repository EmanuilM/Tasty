import './EditMenuProduct.css';
import * as menuService from '../../../../services/menuService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import ProductImage from './ProductImage/ProductImage';

const EditMenuProduct = ({ match , history }) => {

    const dispatch = useDispatch();

    const [initialData, setInitialData] = useState();



    useEffect(() => {
        dispatch(loader());
        menuService.getProductByID(match.params.id)
            .then(res => {
                dispatch(loader());
                setInitialData(res);
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert(error));
            })
    }, []);

    const deleteImage = (id) => { 
        dispatch(loader());
        menuService.deleteImage(id.split('/')[1])
        .then(res => { 
            dispatch(loader());
            menuService.update(match.params.id , id)
            .then(res => { 
                setInitialData(res);
            })
            .catch(error => { 
                console.log(error);
            })
        })
        .catch(error => { 
            dispatch(loader());
            dispatch(showAlert());
            console.log(error);
        })
    }

    const onSubmiHandler = (e) => {
        e.preventDefault();
        const editProductFileds = {
            productName: e.target.productName.value,
            productPrice: Number(e.target.productPrice.value),
            productDescription: e.target.productDescription.value,
            category: e.target.category.value,
        }


        dispatch(loader());
        menuService.editProduct(match.params.id, editProductFileds)
            .then(res => {
                dispatch(loader());
                history.goBack();
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert());
            })
    }

    return (
        <section className="admin-page-menu-edit-product">
            <div className="admin-page-menu-edit-product-inputs">
                <h1>Edit item</h1>
                <form onSubmit={onSubmiHandler}>
                    <div className="menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" defaultValue={initialData?.productName} />
                    </div>

                    <div className="menu-product-category">
                        <p>Add product to</p>
                        <select name="category" defaultValue={initialData?.category}>
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
                        <input type="numner" step="any" min="0" name="productPrice" defaultValue={initialData?.productPrice} />
                    </div>
                    <div className="menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription" defaultValue={initialData?.productDescription}></textarea>
                    </div>
                    <section className="product-images-wrapper">
                        <h1>Product images</h1>
                        <ul>
                            {initialData?.images.map(x => {
                                return <ProductImage key={x.imageID} data={x} deleteImage={deleteImage} / >
                            })}
                        </ul>

                    </section>
                    <div className="menu-add-product-button-wrapper">
                        <button>Edit product</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default EditMenuProduct;