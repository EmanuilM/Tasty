import DailyMenuProduct from './DailyMenuProduct/DailyMenuProduct';
import './ManageDailyMenu.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import * as dailyMenuService from '../../../services/dailyMenuService';
import { loader } from '../../../store/loader';


const ManageDailyMenu = ({ setDailyMenuProducts }) => {
    console.log(setDailyMenuProducts);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    useEffect(() => {
        dispatch(loader())
        dailyMenuService.getProducts()
            .then(res => {
                dispatch(loader());
                setData(res);
            })
            .catch(error => {
                console.log(error);
                dispatch(loader());
            })
    }, []);


    const deleteItem = (id) => {
        dispatch(loader());
        dailyMenuService.deleteProduct(id)
            .then(res => {
                dispatch(loader());
                setData(res)
                setDailyMenuProducts(res);
                console.log(res)
            })
            .catch(error => {
                dispatch(loader());
                console.log(error)
            })
    }

    return (
        <section className="admin-page-manage-daily-menu-wrapper">

            <h1>Current daily menu</h1>

            <section className="manage-breakfast-daily-menu">
                <div className="admin-page-manage-daily-menu-add-product-button-wrapper">
                    <Link to="/admin-panel/daily-menu/product/create">
                        <button>Add product</button>
                    </Link>
                </div>
                <ul>
                    <h1>Breakfast Menu</h1>
                    {data[0]?.length > 0 ? data[0].map(x => {
                        return <DailyMenuProduct key={x._id} id={x._id} data={x} deleteItem={deleteItem} />
                    }) :  <p className="no-product-message">There's no products</p>}

                    <h1>Lucnh Menu</h1>

                    {data[1]?.length > 0 ? data[1].map(x => {
                        return <DailyMenuProduct key={x._id} id={x._id} data={x} deleteItem={deleteItem} />
                    }) :  <p className="no-product-message">There's no products</p>}

                    <h1>Dinner Menu</h1>

                    {data[2]?.length > 0 ? data[2].map(x => {
                        return <DailyMenuProduct key={x._id} id={x._id} data={x} deleteItem={deleteItem} />
                    }) : <p className="no-product-message">There's no products</p>}

                </ul>

            </section>

        </section>
    )
}

export default ManageDailyMenu;