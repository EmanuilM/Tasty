import './SuccessAlert.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store';
import { useEffect } from 'react';
import { clearAlert } from '../../../store/alert-slice';

const SuccessAlert = ({ message }) => {
    const dispatch = useDispatch();

    const alert = useAppSelector(state => state.alert);
    useEffect(() => {
        setTimeout(() => {
           dispatch(clearAlert());
       }, 3000);
   }, [])

    return (
        <div className="success-alert-wrapper">
            <div className="success-alert">
                <div className="success-alert-icon-and-message-wrapper">
                    <i class="fas fa-exclamation-triangle success-icon"></i>
                    <p className="success-message">{message}</p>
                </div>
                <i className="fas fa-times close-alert" onClick={() => dispatch(clearAlert())}></i>
            </div>
        </div>
    )
}

export default SuccessAlert;