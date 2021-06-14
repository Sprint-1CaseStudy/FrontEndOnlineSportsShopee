import React , {Component } from 'react';
import CartService from '../../Services/CartDetails';
import ProductService from '../../Services/ProductService';

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.viewProduct = this.viewProduct.bind(this);
        this.addtoCart = this.addtoCart.bind(this);       
    }

    addtoCart(id){
        CartService.addToCart(id).then(res => { 
            console.log(res);
            this.props.history.push('/'); 
        });
    }

    viewProduct(id){
        this.props.history.push(`/view-Product/${id}`);
    }

    componentDidMount(){
        ProductService.getAllProducts().then( res => {
            this.setState({products: res.data});
        });
    }

    render()
    {
        return(
            <div className = "container">
                
                <h2 style={{ marginBottom:'20px'}}>Product List</h2>
                <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Description</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        productdata => 
                                        <tr key = {productdata.id}>
                                             <td> {productdata.productName} </td>
                                             <td> { productdata.description} </td>   
                                             <td> {productdata.priceAfterDiscount}</td>
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(productdata.id)} className="btn btn-info">View</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.addtoCart(productdata.id)} className="btn btn-info">Add to Cart </button>
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
export default  Product;