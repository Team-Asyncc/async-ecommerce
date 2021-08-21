import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Orderpage from './components/OrderPage/Orderpage';
import Home from './components/Home';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart';
import ProductsList from './components/Products/ProductsList';
import './App.scss';
import ToastContainer from './components/ToastContainer';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Product" component={ProductsList} />
          <Route exact path="/Product/:id" component={ProductDetails} />
          <Route exact path="/Orders" component={Orderpage} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Wishlist" component={Wishlist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
