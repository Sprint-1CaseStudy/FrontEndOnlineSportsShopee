import './App.css';
import CartHome from './components/customer/Cart';
import Login from './components/login/adminLogin';
import SignUp from './components/login/adminSignUp';
import Orders from './components/customer/getOrders';
import ChangePassword from './components/login/adminChangePassword';
import ProductHome from './components/customer/products';
import ViewProduct from './components/customer/viewProduct';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdminHome from './components/admin/products/ListProductComponent';
import updateProduct from './components/admin/products/UpdateProductComponent';
import addProduct from './components/admin/products/AddProductComponent';
import customerLogin from './components/login/customerLogin';
import customerSignup from './components/login/customerSignUp';
import customerChangePassword from './components/login/customerChangePassword';
import CustomersHome from './components/admin/customer/customers';
import ListAddressComponent from './components/customer/address/ListAddressComponent';
import ViewAddressComponent from './components/customer/address/ViewAddressComponent';
import AddAddressComponent from './components/customer/address/AddAddressComponent';
import UpdateAddressComponent from './components/customer/address/UpdateAddressComponent';
import beforecheckout from './components/customer/beforecheckout';
import CustomersbyId from './components/customer/getCustomerById';
import ListCardComponent from './components/customer/card/ListCardComponent';
import CreateCardComponent from './components/customer/card/CreateCardComponent';
import ViewCardComponent from './components/customer/card/ViewCardComponent';

function App() {
  return (
    <div >
      <Router>
                <div className="container">
                    <Switch>
                          <Route path = "/adminlogin" exact component = {Login}></Route>
                          <Route path = "/adminsignup" component = {SignUp}></Route>
                          <Route path = "/adminchangepassword" component = {ChangePassword}></Route>
                          <Route path = "/home" component = {ProductHome}></Route> 
                          <Route path = "/order" component = {Orders}></Route> 
                          <Route path = "/view-Product/:id" component = {ViewProduct}></Route>
                          <Route path = "/cart" component = {CartHome}></Route>

                          <Route path = "/" exact component = {customerLogin}></Route>
                          <Route path = "/signup" component = {customerSignup}></Route>
                          <Route path = "/changepassword" component = {customerChangePassword}></Route>
                          <Route path = "/adminhome" component = {AdminHome}></Route>
                          <Route path = "/edit-product/:id" component = {updateProduct}></Route>
                          <Route path = "/add-product/:id" component = {addProduct}></Route>

                          <Route path = "/customer" exact component = {CustomersHome}></Route>
                          <Route path = "/addresses" component = {ListAddressComponent}></Route>
                          <Route path = "/add-address/:id" component = {AddAddressComponent}></Route>
                          <Route path = "/view-address/:id" component = {ViewAddressComponent}></Route>
                          <Route path = "/view-before/:id" component = {beforecheckout}></Route>
                          <Route path = "/edit-address/:id" component = {UpdateAddressComponent}></Route>
                          <Route path = "/view-Customer" exact component = {CustomersbyId}></Route>
                          <Route path = "/cards" component = {ListCardComponent}></Route>
                          <Route path = "/add-card/:id" component = {CreateCardComponent}></Route>
                          <Route path = "/view-card/:id" component = {ViewCardComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
