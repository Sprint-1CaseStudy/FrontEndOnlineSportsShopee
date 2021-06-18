import React, { Component } from 'react'

import AddressService from '../../../Services/AddressService';

class ListAddressComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addresses: []
        }
        this.addAddress = this.addAddress.bind(this);
        this.editAddress = this.editAddress.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
    }

    deleteAddress(id) {
        AddressService.deleteAddress(id).then( res => {
            this.setState({addresses: this.state.addresses.filter(address => address.id !== id)});
        });
    }

    viewAddress(id) {
        this.props.history.push(`/view-address/${id}`);
    }

    select(id) {
        this.props.history.push(`/view-before/${id}`);
    }

    editAddress(id) {
        this.props.history.push(`/edit-address/${id}`);
    }

    componentDidMount() {
        if(sessionStorage.custId){
            AddressService.getAllAddress().then( res => {
                this.setState({addresses: res.data});
            });
        } else{
            this.props.history.push('/');
        }
    }

    addAddress() {
        this.props.history.push('/add-address/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Address List </h2>
                <div >
                    <button className="btn btn-primary" onClick={this.addAddress}> Add Address </button>
                </div>
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
                                 <th> Actions </th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.addresses.map(
                                     address =>
                                     <tr key = {address.id}>
                                         <td> {address.street} </td>
                                         <td> {address.area} </td>
                                         <td> {address.city} </td>
                                         <td> {address.state} </td>
                                         <td> {address.pincode} </td>
                                         <td>
                                             <button onClick={ () => this.editAddress(address.id)} className="btn btn-info"> Update </button>
                                             <button style={{marginLeft:"10px"}} onClick={ () => this.deleteAddress(address.id)} className="btn btn-danger"> Delete </button>
                                             <button style={{marginLeft:"10px"}} onClick={ () => this.viewAddress(address.id)} className="btn btn-info"> View </button>
                                             <button style={{marginLeft:"10px"}} onClick={ () => this.select(address.id)} className="btn btn-info"> Select </button>
                                         </td>
                                     </tr>
                                 )
                             }
                         </tbody>
                     </table>
                 </div>
            </div>
        )
    }
}
export default ListAddressComponent