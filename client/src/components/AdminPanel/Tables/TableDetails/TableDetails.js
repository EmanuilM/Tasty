import './TableDetails.css';
import TableDetailsProductList from './TableDetailsProductList/TableDetailsProductList';



const TableDetails = (props) => {
    console.log(props)
    return (
        <section className="table-details-wrapper">
            <h1>Managing table {props.match.params.tableID}</h1>
            <ul className="admin-page-table-details-info">
                <TableDetailsProductList
                    productImage="https://st.depositphotos.com/1004373/1268/i/950/depositphotos_12682057-stock-photo-fresh-salad.jpg"
                    productName="Mediterranean Pizza"
                    productQuantity="3"
                    message="asdasdasd" productPrice="17.30"
                />
                <TableDetailsProductList
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
                />

            </ul>
            <div className="table-details-total-price-info">
            <h3>Total price : 100 $</h3>
            <button className="table-details-pay-button">Check as paid</button>
            </div>
        </section>
    )
}

export default TableDetails;