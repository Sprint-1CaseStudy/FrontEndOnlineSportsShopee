import React, { Component } from 'react'
import CardService from '../../../Services/CardService'
import OrdersService from '../../../Services/OrdersService';

class ListCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: []
        }
        this.addCard = this.addCard.bind(this);
        // this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard(id){
        CardService.deleteCard(id).then( res => {
            this.setState({cards: this.state.cards.filter(card => card.id !== id)});
        });
    }
    viewCard(id){
        this.props.history.push(`/view-card/${id}`);
    }

    select() {
        OrdersService.addToorders().then((res) => {
            this.props.history.push('/home');
        });
    }

    componentDidMount(){
        if(sessionStorage.custId){
            CardService.getAllCards().then((res) => {
                this.setState({ cards: res.data});
            });
        } else{
            this.props.history.push('/');
        }
    }

    addCard(){
        this.props.history.push('/add-card/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Cards List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCard}> Add Card </button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Card Holder Name </th>
                                    <th> Card Name </th>
                                    <th> Card Number </th>
                                    <th> Expiry Date </th>
                                    <th> Bank Name </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cards.map(
                                        card => 
                                        <tr key = {card.id}>
                                             <td> {card.cardHolderName} </td>
                                             <td> {card.cardName} </td>   
                                             <td> {card.cardNumber} </td>
                                             <td> {card.expiryDate} </td>
                                             <td> {card.bankName} </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCard(card.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCard(card.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft:"10px"}} onClick={ () => this.select()} className="btn btn-info"> Select </button>
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

export default ListCardComponent
