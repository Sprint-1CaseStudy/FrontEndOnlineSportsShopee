import React, { Component } from 'react'
import CardService from '../../../Services/CardService'

class ViewCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            card: {}
        }
    }

    componentDidMount(){
        if(sessionStorage.custId){
            CardService.getCardDetails(this.state.id).then( res => {
                this.setState({card: res.data});
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
                    <h3 className = "text-center"> View Card Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Card Holder Name:   </label>
                            <div> { this.state.card.cardHolderName }</div>
                        </div>
                        <div className = "row">
                            <label> Card Name:   </label>
                            <div> { this.state.card.cardName }</div>
                        </div>
                        <div className = "row">
                            <label> Card Number:  </label>
                            <div> { this.state.card.cardNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Expiry Date:  </label>
                            <div> { this.state.card.expiryDate }</div>
                        </div>
                        <div className = "row">
                            <label> Bank Name:   </label>
                            <div> { this.state.card.bankName }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCardComponent
