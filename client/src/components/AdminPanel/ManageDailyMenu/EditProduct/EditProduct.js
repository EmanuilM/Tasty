import './EditProduct.css';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import * as dailyMenuService from '../../../../services/dailyMenuService';
import { showAlert } from '../../../../store/alert-slice';
import { useEffect, useState } from 'react';


const EditProduct = ({ match , history }) => { 
    const dispatch = useDispatch();
    const [initialData , setInitialData] = useState();

    useEffect(() => {
        dispatch(loader());
        dailyMenuService.getProductByID(match.params.id)
        .then(res => {
            dispatch(loader());
            setInitialData(res);
        })
        .catch(error => { 
            dispatch(loader());
            dispatch(showAlert(error));
            console.log(error);
        })
    },[]);
    

    const editSubmitHandler = (e) => { 
        e.preventDefault();
        const editProductFileds = {
            productName : e.target.productName.value,
            productPrice : Number(e.target.productPrice.value),
            productDescription : e.target.productDescription.value,
            category : e.target.category.value,
        }
        dispatch(loader());
        dailyMenuService.editProduct(match.params.id , editProductFileds)
        .then(res => {
            console.log(res)
            dispatch(loader());
            history.push('/admin-panel/manage/daily-menu')
        })
        .catch(error => { 
            dispatch(loader());
            dispatch(showAlert(error));
            console.log(error)
        })
    }

    return (
        <section className="admin-page-daily-menu-edit-product">
            <div className="admin-page-daily-menu-edit-product-inputs">
            <h1>Edit item</h1>
                <form onSubmit={editSubmitHandler}>
                    <div className="daily-menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" defaultValue={initialData?.productName} />
                    </div>

                    <div className="daily-menu-product-category">
                        <p>Add product to</p>
                        <select name="category" defaultValue="{initialData?.category}">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                        </select>
                        
                    </div>
                    <div className="daily-menu-product-price">
                        <p>Product Price</p>
                        <input type="numner" step="any" min="0" name="productPrice" defaultValue={initialData?.productPrice}  />
                    </div>
                    <div className="daily-menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription" defaultValue={initialData?.productDescription}></textarea>
                    </div>
                    <div className="daily-menu-add-product-button-wrapper">
                        <button>Add product to menu</button>
                    </div>
                </form>

            </div>

        </section>
    )
}


export default EditProduct;