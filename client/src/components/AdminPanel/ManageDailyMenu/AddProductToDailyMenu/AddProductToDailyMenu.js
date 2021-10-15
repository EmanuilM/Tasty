import './AddProductToDailyMenu.css';
import * as dailyMenuService from '../../../../services/dailyMenuService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';

const AddProductToDailyMenu = ({ history }) => {

    const dispatch = useDispatch();


    const addProductHandler = async (e) => {
        e.preventDefault()
        const productFileds = {
            productName : e.target.productName.value,
            productPrice : Number(e.target.productPrice.value),
            productDescription : e.target.productDescription.value,
            category : e.target.category.value,
        }
        dispatch(loader());
        dailyMenuService.createProduct(productFileds)
        .then(res => {
            console.log(res)
            dispatch(loader());
            history.push('/admin-panel/manage/daily-menu');
        })
        .catch((error) => { 
            dispatch(loader());
            dispatch(showAlert(error))
            console.log(error);
        })
        // .then(response => console.log(response)) 
        
    }
    return (
        <section className="admin-page-daily-menu-add-product">
            <div className="admin-page-daily-menu-create-product-inputs">
                <h1>Create product</h1>
                <form onSubmit={addProductHandler}>
                    <div className="daily-menu-product-name">
                        <p>Product Name</p>
                        <input type="text" name="productName" />
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
                        <input type="number" step="any" min="0" name="productPrice" />
                    </div>
                    <div className="daily-menu-product-description">
                        <p>Description</p>
                        <textarea cols="70" rows="10" style={{ resize: "none", width: "300px" }} name="productDescription"></textarea>
                    </div>
                    <div className="daily-menu-add-product-button-wrapper">
                        <button>Add product to menu</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default AddProductToDailyMenu;