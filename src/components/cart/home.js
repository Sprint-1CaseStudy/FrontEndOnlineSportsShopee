import React , {Component } from 'react';
import CartService from '../../Services/CartDetails';

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

    componentDidMount(){
        CartService.getCartdetails().then((res) => {
            this.setState({ cartList: res.data});
        });
    }

    render()
    {
        return(
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
            </div>
        );
    }
}
export default  Home;