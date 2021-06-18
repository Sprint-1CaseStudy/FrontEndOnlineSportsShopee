import React, {Component} from 'react'
import Customerservice from '../../Services/CustomerService'

class getCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customer: {}
        }
    }

    componentDidMount(){
        if(sessionStorage.custId){
            var custId = sessionStorage.getItem("custId");
            Customerservice.getCustomerById(custId).then( res => {
                 this.setState({customer: res.data});
             });
        } else{
            this.props.history.push('/');
        }
    }

    deleteCustomer(id) {
        Customerservice.deleteCustomer(id).then( res => {
            this.props.history.push('/');
        });
    }

    render(){
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Customer Details </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Name: { this.state.customer.name}</label>
                        </div>
                        <div className = "row">
                            <label>Email: {this.state.customer.gmail}</label>
                        </div>
                        <div className = "row">
                            <label>Contact Number: {this.state.customer.contactNo}</label>
                        </div>
                        <button onClick={ () => this.editProduct(this.state.customer.id)} style={{ marginTop:'15px'}} className="btn btn-info"> Update </button>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(this.state.customer.id)} style={{ marginTop:'15px',marginLeft:'15px'}} className="btn btn-danger"> Delete </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default getCustomer