import './TableDetails.css';
import TableDetailsProductList from './TableDetailsProductList/TableDetailsProductList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import { showAlert } from '../../../../store/alert-slice';
import * as menuService from '../../../../services/menuService';
import * as tableService from '../../../../services/tablesService';



const TableDetails = ({ match }) => {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        dispatch(loader());
        tableService.getTableByID(match.params.tableID)
            .then(res => {
                dispatch(loader());
                setProducts(res.products);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })

    }, [])

    useEffect(() => {
        products.map(x => {
            console.log(x);
            menuService.getProductByName(x.productName)
                .then(res => {
                    console.log(res)
                    setProductDetails((state) => [...state, res]);
                })
                .catch(error => {
                    console.log(error);
                })
        })


    }, [products]);



    return (
        <section className="table-details-wrapper">
            <h1>Details of table {match.params.tableID}</h1>
            <ul className="admin-page-table-details-info">
                {productDetails.map((x,i) => {
                   return <TableDetailsProductList
                        key={i}
                        id={x._id}
                        tableID={match.params.tableID}
                        productImage={x.images[0].imageURL}
                        productName={x.productName}
                        productQuantity={products[i].quantity}
                        productPrice={x.productPrice * products[i].quantity}
                    />
                })}

                {/* <TableDetailsProductList
                    productImage="https://img.bestrecipes.com.au/i9G5gwYE/w643-h428-cfill-q90/br/2019/04/frozen-golden-gaytime-cheesecake-951597-1.jpg"
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
                    productImage="https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?k=20&m=1092632852&s=612x612&w=0&h=ewsOVIVzqVKQcapu14UluNDwoIyf3Yq_R6U2Q8Xt2CY="
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                /> */}

            </ul>
            <div className="table-details-total-price-info">
                <h3>Total price : 100 $</h3>
                <button className="table-details-pay-button">Check as paid</button>
            </div>
        </section>
    )
}

export default TableDetails;