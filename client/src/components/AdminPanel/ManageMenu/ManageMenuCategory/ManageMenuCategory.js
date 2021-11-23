import './ManageMenuCategory.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import * as menuService from '../../../../services/menuService';
import { useState } from 'react';
import { MenuProduct } from '../ManageMenuCategory/MenuProduct/MenuProduct';


const ManageMenuCategory = ({ match, history }) => {
    const dispatch = useDispatch();
    const [response, setResponse] = useState();


    useEffect(() => {
        dispatch(loader());
        menuService.getProductsByMenuCategory(match.params.category[0].toUpperCase() + match.params.category.substring(1))
            .then(res => {
                dispatch(loader());
                setResponse(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }, []);


    const deleteItem = (id) => {
        dispatch(loader());
        menuService.deleteProduct(id)
            .then(res => {
                dispatch(loader());
                history.push('/admin-panel/manage/menu');
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert());
                console.log(error);
            })
    }

    return (
        <section className="manage-menu-category-wrapper">
            <h1>Manage {match.params.category[0].toUpperCase() + match.params.category.substring(1)}</h1>
            <section className="manage-menu-products">
                <div className="add-product-button-wrapper">
                    <Link to="/admin-panel/manage/menu/add-product">
                        <button className="add-product-btn">Add product</button>
                    </Link>
                </div>
                <h2>Current products</h2>
                <ul>
                    {response?.length > 0 ? response.map(x => {
                        return <MenuProduct key={x._id} id={x._id} data={x} deleteItem={deleteItem} />
                    }) : ""}

                </ul>
            </section>
        </section>
    )
}

export default ManageMenuCategory;