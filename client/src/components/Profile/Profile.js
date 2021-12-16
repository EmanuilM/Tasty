import './Profile.css';
import profileImage from '../../assets/profile.jpg';
import { Link, Route } from 'react-router-dom';
import ProfileOrders from './ProfileOrders/ProfleOrders';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import EditProfile from './EditProfile/EditProfile';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/index';
import * as authService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { loader } from '../../store/loader';
import { useState } from 'react';

const Profile = () => {
    const dispatch = useDispatch();
    const authState = useAppSelector(state => state.auth);

    const [userData, setUserData] = useState({});


    useEffect(() => {
        dispatch(loader());
        authService.getUserByID(authState.userAuthState._id)
            .then(res => {
                dispatch(loader());
                setUserData(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }, [authState.userAuthState._id])



    return (
        <main>
            <section className="profile-page-wrapper">
                <article className="my-profile">
                    <div className="about-profile">
                        <img src={profileImage} alt="image" />
                        <h1>{userData?.username}</h1>
                        <p>{userData?.email}</p>
                    </div>
                    <ul className="about-profile-links">
                        <li>
                            <i className="fas fa-user-alt"></i>
                            <Link to="/my-profile">Profile</Link>
                        </li>
                        <li>
                            <i className="fas fa-utensils"></i>
                            <Link to="/my-profile/orders">Orders</Link>
                        </li>
                        <li>
                            <i className="far fa-edit"></i>
                            <Link to="/my-profile/edit">Edit profile</Link>
                        </li>
                    </ul>
                </article>

                <Route path="/my-profile/orders" component={ProfileOrders} exact >
                    <ProfileOrders userData={userData} />
                </Route>

                <Route path="/my-profile" component={ProfileDetails} exact >
                    <ProfileDetails userData={userData} />
                </Route>

                <Route path="/my-profile/edit" component={ProfileDetails} exact >
                    <EditProfile userData={userData} />
                </Route>


            </section>




        </main>
    )
}

export default Profile;