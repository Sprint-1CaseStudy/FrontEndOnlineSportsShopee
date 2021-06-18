import React, { Component } from 'react'
import ProductService from '../../Services/ProductService';

class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        if(sessionStorage.custId){
            ProductService.getProductById(this.state.id).then( res => {
                this.setState({product: res.data});
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
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: { this.state.product.productName } </label>
                        </div>
                        <div className = "row">
                            <label> Product Category: { this.state.product.category }</label>
                        </div>
                        <div className = "row">
                            <label> Product Description: { this.state.product.description }</label>
                        </div>
                        <div className = "row">
                            <label> Brand: { this.state.product.brand }</label>
                        </div>
                        <div className = "row">
                            <label> Color: { this.state.product.colour }</label>
                        </div>
                        <div className = "row">
                            <label> Size: { this.state.product.size }</label>
                        </div>
                        <div className = "row">
                            <label> MRP: { this.state.product.mrp }</label>
                        </div>
                        <div className = "row">
                            <label> Price After Discount: { this.state.product.priceAfterDiscount }</label>
                        </div>
                        <div className = "row">
                            <label> In Stock: { this.state.product.inStock }</label>
                        </div>
                        <div className = "row">
                            <label> Expected Delivery: { this.state.product.expectedDelivery }</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewProduct
