import './AboutUs.css';
import image from '../../../assets/mealpicture.jpg';

const AboutUs = () => { 
    return (
        <section className="about-us" id="aboutus">
        <h1 className="typographgy-heading">About us</h1>
        <article>
            <div className="about-us-description-wrapper">
                <p className="typographgy-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis quisquam corporis, et
                    ducimus quidem quia! Fugit at minus deleniti sapiente laboriosam exercitationem ab iure, esse
                    laborum veritatis voluptatibus sed.
                </p>
                <p className="typographgy-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis quisquam corporis, et
                    ducimus quidem quia! Fugit at minus deleniti sapiente laboriosam exercitationem ab iure, esse
                    laborum veritatis voluptatibus sed.
                </p>
                <p className="typographgy-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis quisquam corporis, et
                    ducimus quidem quia! Fugit at minus deleniti sapiente laboriosam exercitationem ab iure, esse
                    laborum veritatis voluptatibus sed.
                </p>
            </div>
            <img src={image} alt="picture" / >
        </article>
    </section>
    )
}


export default AboutUs;