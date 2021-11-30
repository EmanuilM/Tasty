import './MakeAccount.css';
import * as authService from '../../../services/authService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import { showAlert } from '../../../store/alert-slice';
import emailRegex from '../../../utils/emailRegex';
import { useState } from 'react';

const MakeAccount = () => { 

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({
        email: false,
        username: false,
        password: false,
        repeatPassword: false,
    })

    const [fields, setFields] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    })



    function onInputChangeHandler(e) { 
        const {name , value} = e.target;
        if (name === 'email') {
            setErrors(state => ({ ...state, [name]: !emailRegex.test(value) }));
        } else if (name === 'repeatPassword') {
            setErrors(state => ({ ...state, [name]: value !== fields.password }));
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }));
        }
        setFields(state => ({ ...state, [name]: value }));
    }

    const isFormValid = Object.values(fields).every(x => x !== '');

    async function createAcccount(e) { 
        e.preventDefault();
        const formData = { 
            email  : e.target.email.value,
            username : e.target.username.value,
            password : e.target.password.value,
            repeatPassword : e.target.repeatPassword.value,
            accountType : e.target.accountType.value,
        }
        dispatch(loader());
        authService.createAccountForWorkers(formData)
        .then(res => { 
            dispatch(loader());
            console.log(res);
        })
        .catch(error => {
            dispatch(loader());
            dispatch(showAlert(error));
            console.log(error);
        })
    }

    return(
        <section className="admin-panel-make-account-wrapper">
            <article className="make-account-form-wrapper">
                <form onSubmit={createAcccount}>
                    <label>
                        Email
                        <input type="text" name="email" onChange={onInputChangeHandler} />
                    </label>
                    <label>
                        Username
                        <input type="text" name="username"onChange={onInputChangeHandler} />
                    </label>
                    <label>
                        Password
                        <input type="text" name="password" onChange={onInputChangeHandler} />
                    </label>
                    <label>
                        Repeat password
                        <input type="text" name="repeatPassword" onChange={onInputChangeHandler} />
                    </label>
                    <label>
                        Account type
                        <select name="accountType">
                            <option>Admin account</option>
                            <option>Worker account</option>
                        </select>
                    </label>
                    <button className="create-account-button" disabled={!isFormValid} >Create account</button>
                </form>
            </article>
        </section>
    )
}

export default MakeAccount;