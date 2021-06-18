import React, { Component } from 'react'
import AddressService from '../../../Services/AddressService';

class AddAddressComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            street: '',
            area: '',
            city: '',
            state: '',
            pincode: ''
        }
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);

    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return
        }else {
            if(sessionStorage.custId){
            AddressService.getAddressById(this.state.id).then( (res) => {
                let address = res.data;
                this.setState({
                    street: address.street,
                    area: address.area,
                    city: address.city,
                    state: address.state,
                    pincode: address.pincode
                });
            });
            } else{
                this.props.history.push('/');
            }
        }
    }

    saveOrUpdateAddress = (a) => {
        a.preventDefault();
        let address = {
            street: this.state.street,
            area: this.state.area,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode
        };
        console.log('address => ' + JSON.stringify(address));

        if(this.state.id === '_add') {
            AddressService.addAddress(address).then( (res) => {
                this.props.history.push('/addresses');
            });
        }else{
            AddressService.updateAddress(this.state.id,address).then( res => {
                this.props.history.push('/addresses');
            });
        }
    }

    changeStreetHandler = (event) => {
        this.setState({street: event.target.value});
    }

    changeAreaHandler = (event) => {
        this.setState({area: event.target.value});
    }

    changeCityHandler = (event) => {
        this.setState({city: event.target.value});
    }

    changeStateHandler = (event) => {
        this.setState({state: event.target.value});
    }

    changePincodeHandler = (event) => {
        this.setState({pincode: event.target.value});
    }

    cancel() {
        this.props.history.push('/addresses');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className = "text-center"> Add Address </h3>
        }else{
            return <h3 className = "text=center"> Update Address </h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "conatainer">
                       <div className = "row">
                           <div className = "card col-md-6 offset-md-3 offset-md-3">
                               {
                                   this.getTitle()
                               }
                               <div className = "card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Street: </label>
                                           <input placeholder="Street" name="street" className="form-comtrol"
                                           value={this.state.street} onChange={this.changeStreetHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Area: </label>
                                           <input placeholder="Area" name="area" className="form-comtrol"
                                           value={this.state.area} onChange={this.changeAreaHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> City: </label>
                                           <input placeholder="City" name="city" className="form-comtrol"
                                           value={this.state.city} onChange={this.changeCityHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> State: </label>
                                           <input placeholder="State" name="state" className="form-comtrol"
                                           value={this.state.state} onChange={this.changeStateHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Pincode: </label>
                                           <input placeholder="Pincode" name="pincode" className="form-comtrol"
                                           value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                       </div>
                                       <div style={{marginTop:"10px"}}>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateAddress}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </div>

                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
            </div>
        )
    }
}
export default AddAddressComponent
