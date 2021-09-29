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
import { Route, Switch } from 'react-router-dom';
import ProductCategories from './components/Menu/ProductCategories/ProductCategories';
import { Fragment, useState } from 'react';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Aside from './components/AdminPanel/Aside/Aside';


function App() {
  const [currentCheckOutItems, setCheckOutItems] = useState([]);
  const [isAdmin, setAdminPermission] = useState(true);

  // if(isAdmin)
  // style={{ display: "flex" , flexDirection : "column" , height : "125vh"}}

  return (
    <div className="App">
      <Header isAdmin={isAdmin} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sign-up" component={Register} />
        <Route path="/sign-in" component={Login} />
        <Route path="/daily-menu" component={DailyMenu} />
        <Route path="/menu" component={Menu} exact />
        <Route path="/menu/categories/:products" component={ProductCategories} />
        <Route path="/reservation/:page" component={Reservation} />
        <Route path="/order" component={Orders}>
          <Orders setCheckOutItems={setCheckOutItems} />
        </Route>
        <Route path="/order-check-out" component={OrderCheckOut}>
          <OrderCheckOut currentCheckOutItems={currentCheckOutItems} />
        </Route>
        <Route path="/admin-panel" component={AdminPanel}>
          <AdminPanel />
        </Route>
      </Switch>
      <Footer />
    </div>
  );

}


export default App;
