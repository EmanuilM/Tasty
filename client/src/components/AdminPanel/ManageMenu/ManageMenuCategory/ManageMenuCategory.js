import './ManageMenuCategory.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import * as menuService from '../../../../services/menuService';
import { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';

const ManageMenuCategory = ({ match }) => {
    const dispatch = useDispatch();
    const [response, setResponse] = useState();
    console.log(response);

    // dispatch(loader());
    useEffect(() => {
        menuService.getProductsByMenuCategory(match.params.category[0].toUpperCase() + match.params.category.substring(1))
            .then(res => {
                // dispatch(loader());
                setResponse(res);
                console.log(res);
            })
            .catch(error => {
                // dispatch(loader());
                console.log(error);
            })
    }, []);

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
                        return <Fragment key={x._id}>
                            <li>
                                <p>{x.productName}</p>
                                <i className="fas fa-highlighter"></i>
                                <i className="fas fa-trash"></i>
                            </li>
                        </Fragment>
                    }) : ""}

                </ul>
            </section>
        </section>
    )
}

export default ManageMenuCategory;