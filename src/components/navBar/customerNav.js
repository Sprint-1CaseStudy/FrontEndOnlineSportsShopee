import React, { Component } from 'react'


class customerNav extends Component {

    render() {
        return (
            <div class="navbar-nav" style={{ marginTop:'30px',marginBottom:'20px'}}>
                <header>
                    <nav class="navbar navbar-light " style={{backgroundColor: '#e3f2fd'}}>
                        <h5 style={{ marginLeft:'30px'}}>OnlineSportsShopee</h5>
                        <a class="nav-item nav-link" href="/home" style={{ marginLeft:'300px'}}><h5>Home</h5></a>
                        <a class="nav-item nav-link" href="/cart" style={{ marginLeft:'10px'}}><h5>Cart</h5></a>
                        <a class="nav-item nav-link" href="/order" style={{ marginLeft:'10px'}}><h5>Orders</h5></a>
                        <a class="nav-item nav-link" href="/view-Customer" style={{ marginLeft:'10px'}}><h5>Profile</h5></a>
                        <a class="nav-item nav-link" href="/" style={{ marginRight:'30px' }}><h5>Signout</h5></a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default customerNav
