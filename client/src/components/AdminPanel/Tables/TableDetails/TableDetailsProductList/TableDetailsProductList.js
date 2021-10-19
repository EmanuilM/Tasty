import './TableDetailsProductList.css';

const TableDetailsProductList = ({productImage , productName , productQuantity , message , productPrice}) => {
    return (
        <li>
            <img src={productImage} alt="image" />
            <p>{productName}</p>
            <p>x{productQuantity}</p>
            <p>{message}</p>
            <p>{productPrice}$</p>
            <i className="fas fa-times remove-item"></i>
        </li>
    )
}

export default TableDetailsProductList;