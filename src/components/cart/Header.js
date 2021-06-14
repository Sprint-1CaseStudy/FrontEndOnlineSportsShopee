import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="navbar-nav" style={{ marginTop:'30px',marginBottom:'20px'}}>
                <header>
                    <nav class="navbar navbar-light " style={{backgroundColor: '#e3f2fd'}}>
                        <h5 style={{ marginLeft:'30px'}}>OnlineSportsShopee</h5>
                        <a class="nav-item nav-link" href="/" style={{ marginLeft:'600px'}}><h5>Home</h5></a>
                        <a class="nav-item nav-link" href="/cart" style={{ marginLeft:'10px'}}><h5>Cart</h5></a>
                        <a class="nav-item nav-link" href="/order" style={{ marginRight:'60px' }}><h5>Orders</h5></a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header
