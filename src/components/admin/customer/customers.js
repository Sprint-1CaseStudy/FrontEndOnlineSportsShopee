import React, {Component} from 'react';
import Customerservice from '../../../Services/CustomerService';
import AdminNav from '../../navBar/adminNav';

class Customer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }


    }

    getCustomerById(id){
        this.props.history.push(`/get-customer/${id}`);
    }

    deleteCustomer(id){
        Customerservice.deleteCustomer(id).then( res => {
            this.setState({customers: this.state.customers.filter(customers => customers.id !== id)});
        });
    }



    componentDidMount() {
        if(sessionStorage.userId){
            Customerservice.getAllCustomers().then(res => {
                this.setState({customers: res.data});
            });
        } else{
            this.props.history.push('/adminlogin');
        } 
    }

    render()
    {
        return(
        <div>
            <AdminNav />
            <div className = "container">
                
                <h2 style={{ marginBottom: '20px'}}>Customer List </h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customerdata =>
                                    <tr key = {customerdata.id}>
                                        <td>{customerdata.name}</td>
                                        <td>{customerdata.gmail}</td>
                                        <td>{customerdata.contactNo}</td>
                                        <td>{customerdata.doB}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
        );
    }

}
export default Customer;