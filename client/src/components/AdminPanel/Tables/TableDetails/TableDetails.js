import './TableDetails.css';
import TableDetailsProductList from './TableDetailsProductList/TableDetailsProductList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import * as menuService from '../../../../services/menuService';
import * as tableService from '../../../../services/tablesService';
import * as dashboardService from '../../../../services/dashboardService';



const TableDetails = ({ match, history }) => {
    const dispatch = useDispatch();

    const [tableProducts, setTableProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [tableName, setTableName] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    // let totalPrice = 0;

    useEffect(() => {
        dispatch(loader());
        tableService.getTableByID(match.params.tableID)
            .then(res => {
                dispatch(loader());
                setTableProducts(res.products);
                setTableName(res.name);
                res.products.map(x => {
                    menuService.getProductByName(x.productName)
                        .then(tableProducts => {
                            setProductDetails((state) => [...state, tableProducts]);
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
            })
            .catch(error => {
                dispatch(loader());
            })
    }, [])

    useEffect(() => {
        if (tableProducts.length > 0 && productDetails.length) {
            let price = 0;
            tableProducts.map((x, i) => {
                price += productDetails[i]?.productPrice * x.quantity;
            })
            setTotalPrice(price);
        }
    }, [tableProducts, productDetails])

    async function increaseEarnings(totalPrice) {
        dispatch(loader());
        dashboardService.increaseEarnings(totalPrice)
            .then(res => {
                dispatch(loader());
                console.log(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }


    return (
        <section className="table-details-wrapper">
            <h1>Details of table {tableName}</h1>
            <ul className="admin-page-table-details-info">

                {tableProducts.length ? tableProducts.map((x, i) => {
                    // totalPrice += productDetails[i]?.productPrice * x.quantity;
                    return <TableDetailsProductList
                        key={i}
                        id={x._id}
                        tableID={match.params.tableID}
                        productImage={productDetails[i]?.images[0]?.imageURL}
                        productName={x.productName}
                        productQuantity={x.quantity}
                        productPrice={productDetails[i]?.productPrice * x.quantity}
                        setTableProducts={setTableProducts}
                    />
                }) : <h1>There's no products on this table yet!</h1>}

            </ul>
            {tableProducts.length ?
                <div className="table-details-total-price-info">
                    <h3>Total price : {totalPrice} $</h3>
                    <button className="table-details-pay-button" onClick={() => increaseEarnings(totalPrice)}>Check as paid</button>
                </div> :
                <div className="table-details-back-button-wrapper">
                    <button className="table-details-back-button" onClick={history.goBack}>Go back</button>
                </div>
            }

        </section>
    )
}

export default TableDetails;