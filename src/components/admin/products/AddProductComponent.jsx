import React, { Component } from 'react'
import ProductService from '../../../Services/ProductService';

class AddProductComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            category: '',
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
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this); 
    }

    componentDidMount() {
        if(!sessionStorage.userId){
            this.props.history.push('/adminlogin');
        }
    }

    saveOrUpdateProduct = (p) => {
        p.preventDefault();
        let product = {productName: this.state.productName,
        category: this.state.category,
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

        ProductService.addProduct(product).then((res) => {
            this.props.history.push('/adminhome');
        });
    }

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value});
    } 

    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value});
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
        this.props.history.push('/adminhome');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div class="card-header text-center">
                            <h1 ><b>Add Product</b></h1>
                        </div>
                            <div className= "card-body ">
                                <form>
                                    <div className= "form-group">
                                        <label> Product Name: </label>
                                        <input type="text" placeholder="Product Name" name="productName" className="form-control" 
                                        value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Category: </label>
                                        <input type="text" placeholder="Category" name="category" className="form-control" 
                                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Product Description: </label>
                                        <input type="text" placeholder="Product Description" name="description" className="form-control" 
                                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Brand: </label>
                                        <input type="text" placeholder="Brand" name="brand" className="form-control" 
                                        value={this.state.brand} onChange={this.changeBrandHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Color: </label>
                                        <input type="text" placeholder="Color" name="color" className="form-control" 
                                        value={this.state.color} onChange={this.changeColorHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Size: </label>
                                        <input type="text" placeholder="Size" name="size" className="form-control" 
                                        value={this.state.size} onChange={this.changeSizeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Mrp: </label>
                                        <input type="number" placeholder="Mrp" name="mrp" className="form-control" 
                                        value={this.state.mrp} onChange={this.changeMrpHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price After Discount: </label>
                                        <input type="number" placeholder="Price After Discount" name="priceAfterDiscount" className="form-control" 
                                        value={this.state.priceAfterDiscount} onChange={this.changePriceAfterDiscountHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> In Stock: </label>
                                        <input type="text" placeholder="In Stock" name="inStock" className="form-control" 
                                        value={this.state.inStock} onChange={this.changeInStockHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Expected Delivery: </label>
                                        <input type="date" placeholder="Expected Delivery" name="expectedDelivery" className="form-control" 
                                        value={this.state.expectedDelivery} onChange={this.changeExceptedDeliveryHandler}/>
                                    </div>
                                    <div style={{marginTop:"10px"}}>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
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
export default AddProductComponent