import './Login.css';
import image from '../../assets/loginPage.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as authService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { handleAuthenticate } from '../../store/auth-slice'
import { showAlert } from '../../store/alert-slice';
import { loader } from '../../store/loader';


const Login = ({ history }) => {
    const [loading, setLoader] = useState(true);
    const dispatch = useDispatch();
   
    const [errors, setErrors] = useState({
        username: false,
        password: false,
    })

    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name === 'username') {
            setErrors(state => ({ ...state, [name]: value.length < 4 ? true : false }));
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }));
        }
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        const loginForm = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        dispatch(loader());
        authService.login(loginForm)
            .then(data => {
                dispatch(handleAuthenticate({
                    accessToken: data.token,
                    _id: data.user._id,
                    isAdmin: data.user.isAdmin,
                    isWorker: data.user.isWorker,
                }));
                dispatch(loader());
                history.push('/');
            })
            .catch((error) => {
                dispatch(loader());
                dispatch(showAlert(error))
                console.log(error);
            })

    }

    return (
        <main>
            <section className="login-page-wrapper">
                <article className="login-page-content-wrapper">
                    <img src={image} alt="image" />
                    <div className="login-form-wrapper">
                        <h1>Log in to your account</h1>
                        <form onSubmit={loginSubmitHandler}>
                            <label htmlFor="username">
                                <input type="text" name="username" placeholder="Enter your username" onChange={onInputChangeHandler} />
                                <i className="fas fa-user"></i>
                                <div className="form-error-message">
                                    {errors.username ? <small>Username must be at least 4 characters long!</small> : ""}
                                </div>
                            </label>
                            <label htmlFor="password">
                                <input type="password" name="password" placeholder="Enter your password" onChange={onInputChangeHandler} />
                                <i className="fas fa-lock"></i>
                                <div className="form-error-message">
                                    {errors.password ? <small>Password is required!</small> : ""}
                                </div>
                            </label>

                            <button className="login-btn">Sign in</button>
                        </form>
                        <Link to="sign-up" className="login-link">
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