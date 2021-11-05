import './ProductImage.css';

const ProductImage = ({data , deleteImage}) => {

    return (
        <li>
            <i class="fas fa-times" onClick={() => deleteImage(data.imageID)}></i>
            <img src={data.imageURL} alt="image" />
        </li>
    )
}

export default ProductImage;