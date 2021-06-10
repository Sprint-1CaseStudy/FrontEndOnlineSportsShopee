import './App.css';
import CartHome from './cart/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/cart" exact component = {CartHome}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
