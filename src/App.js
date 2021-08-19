import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product';
import Orderpage from './components/OrderPage/Orderpage';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Orders" component={Orderpage} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Wishlist" component={Wishlist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
