import React , {Component } from 'react';
import customerService from '../../Services/CustomerService';
import LoginNav from '../navBar/loginNav';

class customerLogin extends Component {
     
  constructor(props) {
    super(props);
    this.state = {gmail:'',password: ''};

    this.handleuserGmail = this.handleuserGmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.CustomerLogin = this.CustomerLogin.bind(this);
  }

  handleuserGmail = (event) => {
    this.setState({gmail: event.target.value}); 
  }

  handlePassword = (event) =>  {
    this.setState({password: event.target.value}); 
  }

  CustomerLogin = (event) => {
      event.preventDefault();
      let customer={gmail:this.state.gmail, password:this.state.password};
      customerService.loginInCustomer(customer).then((res) => {
      window.sessionStorage.setItem("custId",res.data.id);
      this.props.history.push('/home');
    });
  }

  componentDidMount(){
    sessionStorage.clear();
  }

  render() {
    return (
      <div><LoginNav/>

      <div><br></br>
                <div class="card text-center col-md-6 offset-md-2 offset-md-3">
                    <div class="card-header">
                        <h1><b>Customer Login</b></h1>
                    </div>
                    <div class="card-body">
                        <form >
                            <div className = "form-group">
                                <label class="card-title" class="col-sm-2 col-form-label" style={{ marginBottom:'15px'}} > Gmail: </label>
                                <input type="email" placeholder="enter your gmail" pattern="[a-z0-9._%+-]+@gmail.com" name="gmail" value={this.state.gmail} onChange={this.handleuserGmail} required/>
                            </div>
                            <div className = "form-group">
                                <label class="col-sm-2 col-form-label" style={{ marginBottom:'15px'}}> Password: </label>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={this.CustomerLogin} style={{ marginBottom:'15px',paddingVertical:'20px',paddingRight:'20px',paddingLeft:'20px'}} >Signin</button>
                            <br></br>
                            <div style={{ marginBottom:'15px'}}>
                              <a href="/signup" style={{ margin:'50px'}} >New User</a>
                              <a href="/changepassword" style={{ margin:'40px'}} >Change Password</a>
                            </div>
                        </form>
                    </div>
                  </div>
            </div>
        </div>
    );
  }
}
export default  customerLogin;