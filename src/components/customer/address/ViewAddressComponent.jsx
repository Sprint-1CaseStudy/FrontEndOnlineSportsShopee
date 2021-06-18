import React, { Component } from 'react'
import AddressService from '../../../Services/AddressService';

class ViewAddressComponent extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            address: {}
        }
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
    render() {
        return (
            <div>
                <br></br>
                   <div className = "card col-md-6 offset-md-3">
                       <h3 className = "text-center"> View Address Details </h3>
                       <div className = "card-body">
                           <div className = "row">
                               <label> Street: { this.state.address.street } </label>
                           </div>
                           <div className = "row">
                               <label> City: { this.state.address.city } </label>
                           </div>
                           <div className = "row">
                               <label> Area: { this.state.address.area } </label>
                           </div>
                           <div className = "row">
                               <label> State: { this.state.address.state } </label>
                           </div>
                           <div className = "row">
                               <label> Pincode: { this.state.address.pincode } </label>
                           </div>
                       </div>
                   </div>
            </div>
        )
    }
}
export default ViewAddressComponent