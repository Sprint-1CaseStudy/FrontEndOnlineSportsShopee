import React , {Component } from 'react';
import userService from '../../Services/userService';
class Signup extends Component {
     
  constructor(props) {
    super(props);
    this.state = {password: '',gmail:'',userName: ''};

    this.handleusergmail = this.handleusergmail.bind(this);
    this.handleuserName = this.handleuserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleusergmail = (event) => {
    this.setState({gmail: event.target.value}); 
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value}); 
  }

  handleuserName = (event) => {
    this.setState({userName: event.target.value}); 
  }

  handleSubmit = (event) => {
    let user={gmail:this.state.gmail, username:this.state.userName, password:this.state.password};
    userService.addUser(user).then((res) => {
      console.log(res);
      this.props.history.push('/adminlogin');
    });
    event.preventDefault();
  }

  cancel(){
    this.props.history.push('/adminlogin');
  }

  render() {
    return (
      <div> <br></br>
                <div class="card text-center col-md-6 offset-md-2 offset-md-3">
                    <div class="card-header">
                        <h1><b>SignUp</b></h1>
                    </div>
                    <div className = "card-body">
                      <form >
                        <div className = "form-group">
                            <label class="card-title" class="col-sm-3 col-form-label" style={{ marginBottom:'15px'}} > Gmail   : </label>
                            <input type="email" placeholder="enter your gmail" name="gmail" style={{ marginLeft:'14px'}} value={this.state.gmail} onChange={this.handleusergmail}/>
                        </div>
                        <div className = "form-group">
                            <label class="card-title" class="col-sm-3 col-form-label" style={{ marginLeft:'16px',marginBottom:'15px'}} > User Name : </label>
                            <input type="text" placeholder="User Name" name="userName" value={this.state.userName} onChange={this.handleuserName}/>
                        </div>
                        <div className = "form-group">
                            <label class="col-sm-3 col-form-label" style={{ marginLeft:'13px'}}> Password : </label>
                            <input type="password" placeholder="Password" name="password" style={{ marginLeft:'5px'}} value={this.state.password} onChange={this.handlePassword}/>
                        </div>
                        <div >
                            <button type="submit" className="btn btn-success" onClick={this.handleSubmit} style={{ margin:'20px'}}>Save</button>
                            <button className="btn btn-danger" style={{ margin:'20px'}} onClick={this.cancel.bind(this)}>Cancel</button>
                        </div>
                      </form>
                    </div>
                </div>
      </div>
    );
  }
}
export default  Signup;