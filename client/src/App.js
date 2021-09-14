import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage}  exact />
        <Route path="/sign-up" component={Register} />
        <Route path="/sign-in" component={Login} />
        <Route path="/menu" component={Menu} />
        <Route path="/reservation" component={Reservation} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
