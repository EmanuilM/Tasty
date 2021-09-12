import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <section className="footer-wrapper">
                <article className="footer-social-media-icons">
                    <h1 className="restaurant-name">Restaurant Name</h1>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </article>


                <article className="footer-restaurant-info">
                    <div className="footer-info-wrapper">
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            000 000 000
                        </p>
                    </div>
                    <div className="footer-info-wrapper">

                        <p>
                            <i className="fas fa-envelope"></i>
                            office@xxx.gmail.com
                        </p>
                    </div>
                    <div className="footer-info-wrapper">
                        <p>
                            <i className="far fa-clock"></i>
                            Mon-Sun 8:00 am - 0:00 am
                        </p>
                    </div>
                </article>


            </section>
        </footer>
    )
}


export default Footer;