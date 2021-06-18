import React, { Component } from 'react'
//import ReactTable from "react-table-6";
//import "./react-table.css";
import ProductService from '../../../Services/ProductService';
import AdminNav from '../../navBar/adminNav';

class ListProductComponent extends Component {

    constructor(props) {
    super(props)
    this.state = {
        products: []
    }
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
}

deleteProduct(id) {
    ProductService.deleteProduct(id).then( res => {
        this.setState({products: this.state.products.filter(product => product.id !== id)});
    });
}

viewProduct(id) {
    this.props.history.push(`/view-Product/${id}`);
}

editProduct(id) {
    this.props.history.push(`/edit-product/${id}`);
}

componentDidMount() {
    if(sessionStorage.userId){
        ProductService.getAllProducts().then( res => {
            this.setState({products: res.data});
        });
    } else{
        this.props.history.push('/adminlogin');
    }
    
}

addProduct() {
    this.props.history.push('/add-product/_add');
}

render() {
    return (
    <div>
        <AdminNav />
        <div className = "container">
            <h2 >Products List</h2>
            <div >
                <button className="btn btn-primary" onClick={this.addProduct}>
                    Add Product
                </button>
            </div>
            <br></br>
            <div className= "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Product Name </th>
                            <th> Product Description </th>
                            <th> Price After Discount </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product =>
                                <tr key = {product.id}>
                                    <td> {product.productName} </td>
                                    <td> {product.description} </td>
                                    <td> {product.priceAfterDiscount} </td>
                                    <td>
                                        <button onClick={ () => this.editProduct(product.id)} className="btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info"> View </button>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>                
    </div>
    )
} 

}
export default ListProductComponent