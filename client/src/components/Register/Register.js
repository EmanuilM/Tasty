import './Register.css';
import image from '../../assets/registerPage.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAuthenticate } from '../../store/auth-slice';
import * as authService from '../../services/authService';




const Register = ({ history }) => {
    const dispatch = useDispatch()


    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        const registerForm = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value,
            repeatPassword: e.target.repeatPassword.value,
        }

        authService.register(registerForm)
            .then(data => {
                console.log('from register component', data);
                dispatch(handleAuthenticate({
                    accessToken: data,
                    _id: '123123123'
                }))
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <main>
            <section className="register-page-wrapper">
                <article className="register-page-content-wrapper">
                    <img src={image} alt="image" />
                    <div className="register-form-wrapper">
                        <h1>Make an account</h1>
                        <form onSubmit={registerSubmitHandler}>
                            <label htmlFor="email">
                                <input id="email" type="text" name="email" placeholder="Enter your email" />
                                <i className="fas fa-envelope"></i>
                            </label>
                            <label htmlFor="username">
                                <input id="username" type="text" name="username" placeholder="Enter your username" />
                                <i className="fas fa-user"></i>
                            </label>
                            <label htmlFor="password">
                                <input type="password" name="password" placeholder="Enter your password" />
                                <i className="fas fa-lock"></i>
                            </label>
                            <label htmlFor="repeatPassword">
                                <input type="password" name="repeatPassword" placeholder="Repeat password" />
                                <i className="fas fa-lock"></i>
                            </label>


                            <button className="register-btn">Sign up</button>
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