import React, { Component } from 'react'

class loginNav extends Component {

    render() {
        return (
            <div class="navbar-nav" style={{ marginTop:'30px',marginBottom:'20px'}}>
                <header>
                    <nav class="navbar navbar-light " style={{backgroundColor: '#e3f2fd'}}>
                        <h5 style={{ marginLeft:'30px'}}>OnlineSportsShopee</h5>
                        <a class="nav-item nav-link" href="/adminlogin" style={{ marginLeft:'400px'}}><h5>Admin</h5></a>
                        <a class="nav-item nav-link" href="/" style={{ marginRight:'50px'}}><h5>Customers</h5></a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default loginNav
