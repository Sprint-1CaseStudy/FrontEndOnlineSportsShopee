import React, { Component } from 'react'
import CardService from '../../../Services/CardService';

class CreateCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            CardHolderName: '',
            cardName: '',
            cardNumber: '',
            expiryDate:'',
            bankName:''
        }
        this.changeCardHolderNameHandler = this.changeCardHolderNameHandler.bind(this);
        this.changeCardNameHandler = this.changeCardNameHandler.bind(this);
        this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
        this.changeExpiryDateHandler = this.changeExpiryDateHandler.bind(this);
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.SaveOrUpdatePayment = this.SaveOrUpdatePayment.bind(this);
    }

    // step 3
    componentDidMount(){
        if(!sessionStorage.custId){
            this.props.history.push('/');
        }         
    }
    
    SaveOrUpdatePayment = (e) => {
        e.preventDefault();
        let card = {cardHolderName: this.state.cardHolderName, cardName: this.state.cardName ,cardNumber: this.state.cardNumber, 
            expiryDate: this.state.expiryDate, bankName: this.state.bankName};
        console.log('card => ' + JSON.stringify(card));

        // step 5
        if(this.state.id === '_add'){
            CardService.addCard(card).then(res =>{
                this.props.history.push('/cards');
            });
        }else{
            CardService.updateCard(card, this.state.id).then( res => {
                this.props.history.push('/cards');
            });
        }
    }
    
    changeCardHolderNameHandler= (event) => {
        this.setState({cardHolderName: event.target.value});
    }

    changeCardNameHandler = (event) => {
        this.setState({cardName: event.target.value});
    }

    changeCardNumberHandler= (event) => {
        this.setState({cardNumber: event.target.value});
    }

    changeExpiryDateHandler= (event) => {
        this.setState({expiryDate: event.target.value});
    }

    changeBankNameHandler= (event) => {
        this.setState({bankName: event.target.value});
    }

    cancel(){
        this.props.history.push('/cards');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Card</h3>
        }else{
            return <h3 className="text-center">Update Card</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Card Holder Name: </label>
                                            <input placeholder="Card Holder Name" name="cardHolderName" className="form-control" 
                                                value={this.state.cardHolderName} onChange={this.changeCardHolderNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  Card Name: </label>
                                            <input placeholder="Card Name" name="cardName" className="form-control" 
                                                value={this.state.cardName} onChange={this.changeCardNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Card Number: </label>
                                            <input placeholder="Card Number" name="cardNumber" className="form-control" 
                                                value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Expiry Date: </label>
                                            <input placeholder="Expiry Date" name="expiryDate" className="form-control" 
                                                value={this.state.expiryDate} onChange={this.changeExpiryDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  Bank Name: </label>
                                            <input placeholder="Bank Name" name="bankName" className="form-control" 
                                                value={this.state.bankName} onChange={this.changeBankNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.SaveOrUpdatePayment}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateCardComponent
