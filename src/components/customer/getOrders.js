import React , {Component } from 'react';
import OrdersService from '../../Services/OrdersService';
import CustomerNav from '../navBar/customerNav';

class Orders extends Component {

    constructor(props) {
        super(props)

        this.state = {
                orderList: []
        }
    }

    componentDidMount(){
        if(sessionStorage.custId){
            OrdersService.getorders().then((res) => {
                this.setState({ orderList: res.data});
            });
        } else{
            this.props.history.push('/');
        }
    }

    render()
    {
        return(
        <div><CustomerNav/>
            <div className = "container">
                <h2 style={{ marginBottom:'20px'}}>Orders</h2>
                <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Price</th>
                                    <th> Date</th>
                                    <th> Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orderList.map(
                                        orderdata => 
                                        <tr key = {orderdata.id}>
                                             <td> {orderdata.productName} </td>
                                             <td> {orderdata.amount} </td>   
                                             <td> {orderdata.billingDate}</td>
                                             <td> {orderdata.paymentMethod}</td>
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
export default  Orders;