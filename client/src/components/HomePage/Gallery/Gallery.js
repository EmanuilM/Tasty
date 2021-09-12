import './Gallery.css';
import imageOne from '../../../assets/galleryImages/1.jpg'
import imageTwo from '../../../assets/galleryImages/2.jpg'
import imageThree from '../../../assets/galleryImages/3.jpg'
import imageFour from '../../../assets/galleryImages/4.jpg'
import imageFive from '../../../assets/galleryImages/5.jpg'
import imageSix from '../../../assets/galleryImages/6.jpg'
import imageSeven from '../../../assets/galleryImages/7.jpg'

const Gallery = () => {

    return(
    <section className="gallery">
    <h1 className="typographgy-heading">Gallery</h1>
    <article className="gallery-wrapper">
        <ul>
            <li>
                <img src={imageOne} alt="image" />
            </li>
            <li>
                <img src={imageTwo} alt="image" />
            </li>
            <li>
                <img src={imageThree} alt="image" />
            </li>
            <li>
                <img src={imageFour} alt="image" />
            </li>
            <li>
                <img src={imageFive} alt="image" />
            </li>
            <li>
                <img src={imageSix} alt="image" />
            </li>
            <li>
                <img src={imageSeven} alt="image" />
            </li>
        </ul>
    </article>
    </section>
    )
}


export default Gallery;