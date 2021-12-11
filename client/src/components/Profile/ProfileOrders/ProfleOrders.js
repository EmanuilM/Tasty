import './ProfileOrders.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react/cjs/react.development';
import { loader } from '../../../store/loader';
import { useAppSelector } from '../../../store/index';
import * as authService from '../../../services/authService';
import image from '../../../assets/mealpicture.jpg';

const ProfileOrders = ({ userData }) => {

    const dispatch = useDispatch();



 




    return (
        <section className="profile-orders-wrapper">
            <h1>My Orders</h1>
            <article className="orders-list-wrapper">
                <ul>
                    {userData.orders?.map((x, i) => {
                        return <li key={i}>
                            <img src={image} alt="image" />
                            <div>
                                <p>{x.orderCreated}</p>
                                <p>{x.street} {x.houseNumber}</p>
                                <p>qwe</p>
                            </div>
                        </li>
                    })}


                </ul>
            </article>
        </section>
    )
}

export default ProfileOrders;