import React , {Component } from 'react';
import customerService from '../../Services/CustomerService';

class changePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {password: '',gmail:'',name: ''};
    
        this.handleCustomergmail = this.handleCustomergmail.bind(this);
        this.handleCustomerName = this.handleCustomerName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleCustomergmail = (event) => {
        this.setState({gmail: event.target.value}); 
      }
    
      handlePassword = (event) => {
        this.setState({password: event.target.value}); 
      }
    
      handleCustomerName = (event) => {
        this.setState({name: event.target.value}); 
      }
    
      handleSubmit = (event) => {
        let customer={gmail:this.state.gmail, name:this.state.name, password:this.state.password};
        customerService.changePassword(customer).then((res) => {
          console.log(res);
          this.props.history.push('/');
        });
        event.preventDefault();
      }
    
      cancel(){
        this.props.history.push('/');
      }
    
      render() {
        return (
          <div> <br></br>
                    <div class="card text-center col-md-6 offset-md-2 offset-md-3">
                        <div class="card-header">
                            <h1><b>Change Password</b></h1>
                        </div>
                        <div className = "card-body">
                          <form >
                            <div className = "form-group">
                                <label class="card-title" class="col-sm-2 col-form-label" style={{ marginLeft:'24px', marginBottom:'15px'}} > Gmail   : </label>
                                <input type="email" placeholder="enter your gmail" name="gmail" style={{ marginLeft:'14px'}} value={this.state.gmail} onChange={this.handleCustomergmail}/>
                            </div>
                            <div className = "form-group">
                                <label class="card-title" class="col-sm-2 col-form-label" style={{ marginLeft:'24px', marginBottom:'15px'}} > Name : </label>
                                <input type="text" placeholder="Customer Name" name="name" style={{ marginLeft:'15px'}} value={this.state.name} onChange={this.handleCustomerName}/>
                            </div>
                            <div className = "form-group">
                                <label  class="col-sm-3 col-form-label" style={{ marginLeft:'5px',marginBottom:'15px'}}> Password : </label>
                                <input type="password" placeholder="Password" name="password" style={{ marginLeft:'0px'}} value={this.state.password} onChange={this.handlePassword}/>
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

export default  changePassword;