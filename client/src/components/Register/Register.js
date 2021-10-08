import './Register.css';
import image from '../../assets/registerPage.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAuthenticate } from '../../store/auth-slice';
import * as authService from '../../services/authService';
import { useState } from 'react';
import emailRegex from '../../utils/emailRegex';




const Register = ({ history }) => {
    const dispatch = useDispatch();

    const [fields, setFields] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    })

    const [errors, setErrors] = useState({
        email: false,
        username: false,
        password: false,
        repeatPassword: false,
    })

    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setErrors(state => ({ ...state, [name]: !emailRegex.test(value) }));
        } else if (name === 'repeatPassword') {
            setErrors(state => ({ ...state, [name]: value !== fields.password }));
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }));
        }
        setFields(state => ({ ...state, [name]: value }));
    }


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
                dispatch(handleAuthenticate({
                    accessToken: data.token,
                    _id: data.user._id,
                    isAdmin : data.user.isAdmin,
                    isWorker : data.user.isWorker,
                }));
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
                                <input id="email" type="text" name="email" placeholder="Enter your email" onChange={onInputChangeHandler} />
                                <i className="fas fa-envelope"></i>
                                <div className="form-error-message">
                                    {errors.email ? <small>Invalid email!</small> : ""}
                                </div>

                            </label>
                            <label htmlFor="username">
                                <input id="username" type="text" name="username" placeholder="Enter your username" onChange={onInputChangeHandler} />
                                <i className="fas fa-user"></i>
                                <div className="form-error-message">
                                    {errors.username ? <small >Username is required!</small> : ""}
                                </div>
                            </label>
                            <label htmlFor="password">
                                <input type="password" name="password" placeholder="Enter your password" onChange={onInputChangeHandler} />
                                <i className="fas fa-lock"></i>

                                <div className="form-error-message">
                                    {errors.password ? <small>Password is required!</small> : ""}
                                </div>
                            </label>
                            <label htmlFor="repeatPassword">
                                <input type="password" name="repeatPassword" placeholder="Repeat password" onChange={onInputChangeHandler} />
                                <i className="fas fa-lock"></i>
                                <div className="form-error-message">
                                    {errors.repeatPassword ? <small>Passwords does not match!</small> : ""}
                                </div>

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