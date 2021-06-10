import React , {Component } from 'react';
import Header from './Header';

class Home extends Component {

    render()
    {
        return(
            <div className = "container">
                <Header/>
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
                                        
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        );
    }
}
export default  Home;