import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DailyMenu from './components/DailyMenu/DailyMenu';
import Menu from './components/Menu/Menu';
import Reservation from './components/Reservation/Reservation';
import Orders from './components/Orders/Orders';
import OrderCheckOut from './components/Orders/OrderCheckOut/OrderCheckOut';
import Footer from './components/Footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductCategories from './components/Menu/ProductCategories/ProductCategories';
import { useEffect, useState } from 'react';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { useAppSelector } from './store/index';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthenticate } from './store/auth-slice';
import { Alert } from './components/shared/Alert/Alert';
import { Loader } from './components/shared/Loader/Loader';
import { loader } from './store/loader';
import * as authService from './services/authService';
import { getProducts } from './store/order-slice';
import * as dailyMenuService from './services/dailyMenuService';
import Profile from './components/Profile/Profile';

function App() {

  const authState = useAppSelector(state => state.auth);
  const alertState = useAppSelector(state => state.alert);
  const isLoading = useSelector(state => state.loader);
  const orderState = useSelector(state => state.order);
  const [dailyMenuProducts, setDailyMenuProducts] = useState([]);


  console.log(authState.userAuthState.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loader());
    authService.getUser()
      .then(response => {
        dispatch(loader());
        if (response) {
          dispatch(handleAuthenticate(response))
        }

      })
      .catch((error) => {
        dispatch(loader());
        console.log(error);
      })

    dispatch(getProducts());


    dailyMenuService.getProducts()
      .then(res => {
        setDailyMenuProducts(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return (
    <div className="App">

      <Header dailyMenuProducts={dailyMenuProducts} />

      <Switch>
        <Route path="/" component={HomePage} exact />
        {!authState.isAuthenticated && <Route path="/sign-up" component={Register} />}
        {!authState.isAuthenticated && <Route path="/sign-in" component={Login} />}
        <Route path="/daily-menu" component={DailyMenu} />
        <Route path="/menu" component={Menu} exact />
        <Route path="/menu/categories/:category" component={ProductCategories} />
        {authState.isAuthenticated && <Route path="/reservation/:page" component={Reservation} />}
        {authState.isAuthenticated && <Route path="/order" component={Orders} exact />}
        {authState.isAuthenticated && <Route path="/order/categories/:category" component={Orders} exact />}
        {authState.isAuthenticated && <Route path="/order-check-out" component={OrderCheckOut} />}
        {authState.isAuthenticated && <Route path="/my-profile" component={Profile} />}

        {authState.userAuthState.isAdmin && <Route path="/admin-panel" component={AdminPanel}>
          <AdminPanel setDailyMenuProducts={setDailyMenuProducts} />
        </Route>}

        <Route path="*">
          <Redirect path='/' />
        </Route>
      </Switch>
      <Footer />

      {isLoading ? <Loader /> : ""}
      {alertState.shown ? <Alert message={alertState.message} /> : ""}
    </div>
  );


}
export default App;
