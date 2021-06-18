import React, { Component } from 'react'
import AddressService from '../../Services/AddressService';


class ViewComponent extends Component {

    

    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            address: {}
        }
        this.checkout = this.checkout.bind(this);
    }
    
    componentDidMount() {
        if(sessionStorage.custId){
            AddressService.getAddressById(this.state.id).then( res => {
                this.setState({address: res.data});
            });
        } else{
            this.props.history.push('/');
        }
    }

    checkout(){
        this.props.history.push('/cards');
    }

    render() {
        var cartamount = sessionStorage.getItem("cartamount");
        return (
            <div>
                <h2 className="text-center"> Address </h2>
                
                <br></br>
                 <div className="row">
                     <table className = "table table-striped table-bordered">
                         <thead>
                             <tr>
                                 <th> Street </th>
                                 <th> Area </th>
                                 <th> City </th>
                                 <th> State </th>
                                 <th> Pincode </th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 
                                <tr >
                                    <td> { this.state.address.street } </td>
                                    <td> { this.state.address.area } </td>
                                    <td>  { this.state.address.city } </td>
                                    <td> { this.state.address.state } </td>
                                    <td> { this.state.address.pincode } </td>
                                </tr>
                                 
                             }
                         </tbody>
                     </table>
                     <h1><lable>Total Amount = { cartamount }</lable></h1>
                     <button style={{marginRight:"100px"}} onClick={ () => this.checkout()} className="btn btn-success"> Checkout </button>
                 </div>
            </div>
        )
    }
}
export default ViewComponent