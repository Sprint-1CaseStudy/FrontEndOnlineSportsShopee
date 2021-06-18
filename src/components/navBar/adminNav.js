import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class adminNav extends Component {

    render() {
        return (
            <div class="navbar-nav" style={{ marginTop:'30px',marginBottom:'20px'}}>
                <header>
                    <nav class="navbar navbar-light " style={{backgroundColor: '#e3f2fd'}}>
                        <h5 style={{ marginLeft:'30px'}}>OnlineSportsShopee</h5>
                        <a class="nav-item nav-link" href="/adminhome" style={{ marginLeft:'400px'}}><h5>Home</h5></a>
                        <a class="nav-item nav-link" href="/customer" style={{ marginLeft:'10px'}}><h5>Customers</h5></a>
                        <a class="nav-item nav-link" href="/adminlogin" style={{ marginRight:'30px' }}><h5>logout</h5></a>
                    </nav>

                </header>
            </div>
        )
    }
}

export default adminNav
