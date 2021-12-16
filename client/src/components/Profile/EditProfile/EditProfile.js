import './EditProfile.css';
import { useState, useEffect } from 'react';
import emailRegex from '../../../utils/emailRegex';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';
import * as authService from '../../../services/authService';
import { showAlert } from '../../../store/alert-slice';
import { useHistory } from 'react-router-dom';

const EditProfile = ({ userData }) => {


    const dispatch = useDispatch();
    const history = useHistory();



    const [errors, setErrors] = useState({
        email: false,
        username: false,
        currentPassword: false,
    })

    const [fields, setFields] = useState({
        email: '',
        username: '',
        currentPassword: '',

    })

    useEffect(() => {
        setFields((state) => ({ ...state, email: userData?.email, username: userData?.username }))
    }, [userData])



    function onInputChangeHandler(e) {
        const { name, value } = e.target;
        if (name === 'email') {
            setErrors(state => ({ ...state, [name]: !emailRegex.test(value) }));
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }));
        }
        setFields(state => ({ ...state, [name]: value }));
    }



    const isFormValid = Object.values(fields).every(x => x !== '') && emailRegex.test(fields.email) && Object.values(fields)[3] === Object.values(fields)[4];

    async function editAccaunt(e) {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            username: e.target.username.value,
            currentPassword: e.target.currentPassword.value,
        }
        console.log(formData);

        dispatch(loader());
        authService.updateUser(formData, userData._id)
            .then(res => {
                dispatch(loader());
                history.push('/my-profile');
                console.log(res);
            })
            .catch(error => {
                dispatch(loader());
                dispatch(showAlert(error));
                console.log(error);
            })


    }

    return (
        <section className="edit-profile-wrapper">
            <section className="edit-account-wrapper">
                <article className="edit-account-form-wrapper">
                    <form onSubmit={editAccaunt}>
                        <label>
                            Email
                            <input type="text" name="email" onChange={onInputChangeHandler}  />
                            <div className="form-error-message">
                                {errors.email ? <small>Invalid email!</small> : ""}
                            </div>
                        </label>
                        <label>
                            Username
                            <input type="text" name="username" onChange={onInputChangeHandler}  />
                            <div className="form-error-message">
                                {errors.username ? <small >Username is required!</small> : ""}
                            </div>
                        </label>
                        <label>
                            Current Password
                            <input type="text" name="currentPassword" onChange={onInputChangeHandler} />
                            <div className="form-error-message">
                                {errors.currentPassword ? <small>Current password is required!</small> : ""}
                            </div>
                        </label>
                        <button className="edit-account-button" disabled={!isFormValid} >Edit account</button>
                    </form>
                </article>
            </section>
        </section>
    )
}

export default EditProfile;