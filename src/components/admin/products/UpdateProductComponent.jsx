import React, { Component } from 'react'
import ProductService from '../../../Services/ProductService';

class UpdateProductComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            catergory: '',
            description: '',
            brand: '',
            color: '',
            size:'',
            mrp: '',
            priceAfterDiscount: '',
            inStock: '',
            expectedDelivery: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.changeSizeHandler = this.changeSizeHandler.bind(this);
        this.changeMrpHandler = this.changeMrpHandler.bind(this);
        this.changePriceAfterDiscountHandler = this.changePriceAfterDiscountHandler.bind(this);
        this.changeInStockHandler = this.changeInStockHandler.bind(this);
        this.changeExceptedDeliveryHandler = this.changeExceptedDeliveryHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this); 
    }

    componentDidMount() {
        if(sessionStorage.userId){
            ProductService.getProductById(this.state.id).then( (res) => {
                let product = res.data;
                this.setState({productName: product.productName,
                    catergory: product.catergory,
                    description: product.description,
                    brand: product.brand,
                    color: product.color,
                    size: product.size,
                    mrp: product.mrp,
                    priceAfterDiscount: product.priceAfterDiscount,
                    inStock: product.inStock,
                    expectedDelivery: product.expectedDelivery
                });
            });
        } else{
            this.props.history.push('/adminlogin');
        }
    }

    updateProduct = (p) => {
        p.preventDefault();
        let product = {productName: this.state.productName,
            catergory: this.state.catergory,
            description: this.state.description,
            brand: this.state.brand,
            color: this.state.color,
            size: this.state.size,
            mrp: this.state.mrp,
            priceAfterDiscount: this.state.priceAfterDiscount,
            inStock: this.state.inStock,
            expectedDelivery: this.state.expectedDelivery
            };
            console.log('product => ' + JSON.stringify(product));
            console.log('id => ' +JSON.stringify(this.state.id));
            ProductService.updateProduct(this.state.id,product).then( res => {
                    this.props.history.push('/adminhome');
                });
    }    

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value});
    } 

    changeCategoryHandler = (event) => {
        this.setState({catergory: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeBrandHandler = (event) => {
        this.setState({brand: event.target.value});
    }

    changeColorHandler = (event) => {
        this.setState({color: event.target.value});
    }

    changeSizeHandler = (event) => {
        this.setState({size: event.target.value});
    }

    changeMrpHandler = (event) => {
        this.setState({mrp: event.target.value});
    }

    changePriceAfterDiscountHandler = (event) => {
        this.setState({priceAfterDiscount: event.target.value});
    }

    changeInStockHandler = (event) => {
        this.setState({inStock: event.target.value});
    }

    changeExceptedDeliveryHandler = (event) => {
        this.setState({expectedDelivery: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"> Update Product </h3>
                            <div className= "card-body">
                                <form>
                                    <div className= "form-group">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="productName" className="form-control" 
                                        value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Category: </label>
                                        <input placeholder="Category" name="category" className="form-control" 
                                        value={this.state.catergory} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Product Description: </label>
                                        <input placeholder="Product Description" name="description" className="form-control" 
                                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Brand: </label>
                                        <input placeholder="Brand" name="brand" className="form-control" 
                                        value={this.state.brand} onChange={this.changeBrandHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Color: </label>
                                        <input placeholder="Color" name="color" className="form-control" 
                                        value={this.state.color} onChange={this.changeColorHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Size: </label>
                                        <input placeholder="Size" name="size" className="form-control" 
                                        value={this.state.size} onChange={this.changeSizeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Mrp: </label>
                                        <input placeholder="Mrp" name="mrp" className="form-control" 
                                        value={this.state.mrp} onChange={this.changeMrpHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price After Discount: </label>
                                        <input placeholder="Price After Discount" name="priceAfterDiscount" className="form-control" 
                                        value={this.state.priceAfterDiscount} onChange={this.changePriceAfterDiscountHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> In Stock: </label>
                                        <input placeholder="In Stock" name="inStock" className="form-control" 
                                        value={this.state.inStock} onChange={this.changeInStockHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Expected Delivery: </label>
                                        <input placeholder="Expected Delivery" name="expectedDelivery" className="form-control" 
                                        value={this.state.expectedDelivery} onChange={this.changeExceptedDeliveryHandler}/>
                                    </div>
                                    <div style={{marginTop:"10px"}}>
                                        <button className="btn btn-success" onClick={this.updateProduct}> Save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> Cancel </button>
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
export default UpdateProductComponent