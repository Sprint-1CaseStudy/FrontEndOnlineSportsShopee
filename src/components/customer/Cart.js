import React , {Component } from 'react';
import CartService from '../../Services/CartService';
import CustomerNav from '../navBar/customerNav';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
                cartList: []
        }
        this.deleteCart = this.deleteCart.bind(this);
    }

    deleteCart(id){
        CartService.deleteCart(id).then( res => {
            this.setState({cartList: this.state.cartList.filter(cartdata => cartdata.id !== id)});
        });
    }

    checkoutCart(){
        let amount=0;
        this.state.cartList.map(cartdata => amount += cartdata.total)
        window.sessionStorage.setItem("cartamount",amount);
        if(sessionStorage.cartamount){
            this.props.history.push('/addresses');
        }
    }

    componentDidMount(){
        if(sessionStorage.custId){
            CartService.getCartdetails().then((res) => {
                this.setState({ cartList: res.data});
            });
        } else{
            this.props.history.push('/');
        }
    }

    render()
    {
        return(
        <div>
            <CustomerNav />   
            <div className = "container">
                <h2 style={{ marginBottom:'20px'}}>Cart</h2>
                <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Price</th>
                                    <th> Quantity</th>
                                    <th> Final Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cartList.map(
                                        cartdata => 
                                        <tr key = {cartdata.id}>
                                             <td> {cartdata.productName} </td>
                                             <td> { cartdata.price} </td>   
                                             <td> {cartdata.quantity}</td>
                                             <td> {cartdata.total}</td>
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCart(cartdata.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 <button style={{marginRight:'30px'}} onClick={ () => this.checkoutCart()} className="btn btn-success">Proceed </button>
            </div>
        </div>
        );
    }
}
export default  Home;