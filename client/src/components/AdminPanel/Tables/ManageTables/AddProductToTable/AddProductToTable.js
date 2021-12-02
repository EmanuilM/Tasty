import './AddProductToTable.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../../store/loader';
import * as menuService from '../../../../../services/menuService';

const AddProductToTable = ({ productsCategory }) => {
    console.log(productsCategory);
    const dispatch = useDispatch();
    const [productsName, setProductsName] = useState([]);

    useEffect(() => {
        dispatch(loader());
        menuService.getProductsByMenuCategory(productsCategory[0])
            .then(res => {
                dispatch(loader());
                setProductsName(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }, [])




    function onCategoryChange(e) {
        dispatch(loader());
        menuService.getProductsByMenuCategory(e.target.value)
            .then(res => {
                dispatch(loader());
                setProductsName(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }

    return (
        <section className="admin-page-manage-table-add-product">
            <select className="manage-table-select-product-category" name="productCategory" onChange={onCategoryChange}>
                {productsCategory.map((x, i) => {
                    return <option key={i} value={x}>{x}</option>
                })}
            </select>
            <select className="manage-table-select-product" name="productName" >
                {productsName.map((x, i) => {
                    return <option key={i} value={x.productName}>{x.productName}</option>
                })}
            </select>
            <input type="number" className="manage-table-product-quantity" name="productQuantity" min="1" defaultValue="1" />
            {/* <i className="fas fa-times remove-item"></i> */}
        </section>


    )
}

export default AddProductToTable;