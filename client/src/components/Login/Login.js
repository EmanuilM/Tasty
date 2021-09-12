import './Login.css';
import image from '../../assets/loginPage.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main>
            <section className="login-page-wrapper">
                <article className="login-page-content-wrapper">
                    <img src={image} alt="image" />
                    <div className="login-form-wrapper">
                        <h1>Log in to your account</h1>
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
                            
                            <button className="login-btn">Login</button>
                        </form>
                        <Link to="sign-in" className="login-link">
                        <p>You don't have an account?</p>
                        <p>Sign up</p>
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Login;