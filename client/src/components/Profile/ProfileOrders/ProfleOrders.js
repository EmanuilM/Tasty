import './ProfileOrders.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react/cjs/react.development';
import { loader } from '../../../store/loader';
import { useAppSelector } from '../../../store/index';
import * as authService from '../../../services/authService';
import image from '../../../assets/mealpicture.jpg';
import { Link, useLocation } from 'react-router-dom';
const ProfileOrders = ({ userData }) => {

    const orders = userData.orders ? [...userData.orders].reverse().slice(0, 10) : [];

    return (
        <section className="profile-orders-wrapper">
            <h1>My last orders</h1>
            <article className="orders-list-wrapper">
                <ul>
                    {orders.map((x, i) => {
                        let img = x.orderedProducts?.map(x => {
                            return x.images[0].imageURL
                        });
                        return <li key={i}>
                            <img src={img} alt="image" />
                            <div>
                                <p>{x.orderCreated}</p>
                                <p>{x.street} {x.houseNumber}</p>
                                <p>{x.totalPrice}$</p>
                            </div>
                        </li>
                    })}

                </ul>

            </article>
        </section>
    )
}

export default ProfileOrders;