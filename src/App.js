import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Loading from './components/Loading';
import './App.scss';
import ToastContainer from './components/ToastContainer';

// Dynamic Imports
const Home = React.lazy(() => import('./components/Home'));
const Aboutus = React.lazy(() => import('./components/Aboutus/Aboutus'));
const ProductsList = React.lazy(() =>
  import('./components/Products/ProductsList')
);
const Orderpage = React.lazy(() => import('./components/OrderPage/Orderpage'));
const Wishlist = React.lazy(() => import('./components/Wishlist/Wishlist'));
const Cart = React.lazy(() => import('./components/Cart'));
const ProductDetails = React.lazy(() =>
  import('./components/ProductDetails/ProductDetails')
);
const OrderSuccess = React.lazy(() =>
  import('./components/AddressPage/OrderSuccess')
);
const AddressPage = React.lazy(() =>
  import('./components/AddressPage/AddressPage')
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/Aboutus" component={Aboutus} />
            <Route exact path="/Product" component={ProductsList} />
            <Route exact path="/Product/:id" component={ProductDetails} />
            <Route exact path="/Orders" component={Orderpage} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Wishlist" component={Wishlist} />
            <Route exact path="/address" component={AddressPage} />
            <Route exact path="/ordersuccessful" component={OrderSuccess} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
