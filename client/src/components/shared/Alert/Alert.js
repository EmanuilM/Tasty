import './Alert.css';
import { useEffect } from 'react/cjs/react.development';
import { clearAlert } from '../../../store/alert-slice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store';

export const Alert = ({ message }) => {
    const alert = useAppSelector(state => state.alert);

    const dispatch = useDispatch();

    useEffect(() => {
         setTimeout(() => {
            dispatch(clearAlert());
        }, 3000);
    }, [alert.shown])

    return (
        <div className="alert-wrapper">
            <div className="alert">
                <div className="alert-error-icon-and-message-wrapper">
                    <i class="fas fa-exclamation-triangle error-icon"></i>
                    <p className="error-message">{message}</p>
                </div>
                <i className="fas fa-times close-alert" onClick={() => dispatch(clearAlert())}></i>
            </div>
        </div>
    )
}

