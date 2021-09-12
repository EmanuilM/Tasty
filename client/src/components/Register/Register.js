import './Register.css';
import image from '../../assets/registerPage.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <main>
            <section className="register-page-wrapper">
                <article className="register-page-content-wrapper">
                    <img src={image} alt="image" />
                    <div className="register-form-wrapper">
                        <h1>Make an account</h1>
                        <form>
                            <label htmlFor="email">
                                <input id="email" type="text" placeholder="Enter your email" / >
                                <i class="fas fa-envelope"></i>
                            </label>
                            <label htmlFor="username">
                            <input id="username" type="text" placeholder="Enter your username" />
                            <i class="fas fa-user"></i>
                            </label>
                            <label htmlFor="password">
                                <input id="password" type="password" placeholder="Enter your password" />
                                <i class="fas fa-lock"></i>
                            </label>
                            
                            <button className="register-btn">Register</button>
                        </form>
                        <Link to="sign-in" className="login-link">
                        <p>Got an account?</p>
                        <p>Sign in</p>
                        

                        </Link>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Register;