import './App.css';
import CartHome from './components/cart/home';
import ProductHome from './components/product/products';
import ViewProduct from './components/product/viewProduct';
import Header from './components/cart/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
                <div className="container">
                  <Header/>
                    <Switch>
                          <Route path = "/" exact component = {ProductHome}></Route> 
                          <Route path = "/view-Product/:id" exact component = {ViewProduct}></Route>
                          <Route path = "/cart" exact component = {CartHome}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
